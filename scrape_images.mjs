import google from 'googlethis';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith('https') ? https : http;
    const request = protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        fs.unlink(dest, () => reject(`Failed to download, status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err.message));
    });
  });
};

async function searchAndDownload(query, folder, prefix, count) {
  console.log(`Searching for: ${query}`);
  try {
    const images = await google.image(query, { safe: false });
    let downloaded = 0;
    
    for (let i = 0; i < images.length && downloaded < count; i++) {
      const url = images[i].url;
      // Skip data URIs or weird formats
      if (!url.startsWith('http')) continue;
      
      const ext = url.split('.').pop().split('?')[0].substring(0, 4);
      const safeExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext.toLowerCase()) ? ext : 'jpg';
      const dest = path.join(folder, `${prefix}_${downloaded + 1}.${safeExt}`);
      
      try {
        await download(url, dest);
        console.log(`Downloaded ${dest}`);
        downloaded++;
      } catch (err) {
        console.log(`Failed to download ${url}: ${err}`);
      }
    }
  } catch (error) {
    console.error(`Error searching ${query}:`, error);
  }
}

async function main() {
  const destDir = path.join(process.cwd(), 'public', 'images', 'new_scraped');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const queries = [
    { q: 'women winter jacket flat lay photography no people', prefix: 'jacket' },
    { q: 'womens winter coat rack aesthetic no people', prefix: 'coat' },
    { q: 'ladies knit sweater dress folded aesthetic flat lay no people', prefix: 'dress' },
    { q: 'womens winter clothing aesthetic hanger no models', prefix: 'clothing' }
  ];

  for (const item of queries) {
    await searchAndDownload(item.q, destDir, item.prefix, 8); // 8 images per query = 32 images
  }
}

main();
