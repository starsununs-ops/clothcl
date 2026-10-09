import fs from 'fs';
import path from 'path';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
      } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Handle redirect
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        fs.unlink(dest, () => reject(`Failed to download, status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err.message));
    });
  });
};

async function getMetImages() {
  const destDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  try {
    // Search for public domain dresses
    const searchRes = await fetch('https://collectionapi.metmuseum.org/public/collection/v1.1/search?hasImages=true&isPublicDomain=true&q=dress');
    const searchData = await searchRes.json();
    
    // Shuffle the IDs to get different dresses each time
    const ids = searchData.objectIDs.sort(() => 0.5 - Math.random()).slice(0, 80);
    
    let downloadedCount = 0;
    const targetCount = 39; // We need 39 images for the whole site
    
    for (const id of ids) {
      if (downloadedCount >= targetCount) break;
      
      try {
        const objRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        const objData = await objRes.json();
        
        // Ensure it's actually a clothing item (sometimes "dress" matches swords or paintings)
        if (!objData.primaryImageSmall) continue;
        const title = objData.title ? objData.title.toLowerCase() : '';
        const dept = objData.department ? objData.department.toLowerCase() : '';
        const objName = objData.objectName ? objData.objectName.toLowerCase() : '';
        
        if (dept.includes('costume') || objName.includes('dress') || title.includes('dress') || title.includes('gown')) {
          const imgUrl = objData.primaryImageSmall;
          const dest = path.join(destDir, `dress_${downloadedCount + 1}.jpg`);
          
          await download(imgUrl, dest);
          console.log(`Downloaded ${downloadedCount + 1}/${targetCount}: ${objData.title}`);
          downloadedCount++;
        }
      } catch (e) {
        console.error(`Failed to fetch object ${id}`, e.message);
      }
    }
  } catch (error) {
    console.error(`Error with MET API:`, error);
  }
}

getMetImages();
