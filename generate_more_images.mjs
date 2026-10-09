import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateMoreImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  let newImgIndex = 14;

  const transformations = [
    { flop: true, modulate: { hue: 120 } },       // 14
    { flop: false, modulate: { hue: 200 } },      // 15
    { flop: true, modulate: { hue: 45 } },        // 16
    { flop: false, modulate: { hue: 270 } },      // 17
    { flop: true, modulate: { brightness: 0.8 } }, // 18
    { flop: false, modulate: { brightness: 1.2 } }, // 19
    { flop: true, modulate: { hue: 150 } },       // 20
    { flop: false, modulate: { hue: 300 } },      // 21
    { flop: true, modulate: { hue: 60 } },        // 22
    { flop: false, modulate: { saturation: 1.5 } }, // 23
    { flop: true, modulate: { saturation: 0.5 } },  // 24
    { flop: false, modulate: { hue: 90 } },       // 25
    { flop: true, modulate: { hue: 210 } },       // 26
    { flop: false, modulate: { hue: 330 } },      // 27
    { flop: true, modulate: { hue: 180 } },       // 28
    { flop: false, modulate: { hue: 240 } },      // 29
    { flop: true, modulate: { brightness: 0.9, hue: 30 } }, // 30
    { flop: false, modulate: { brightness: 1.1, hue: 15 } }, // 31
    { flop: true, modulate: { hue: 75 } },       // 32
    { flop: false, modulate: { hue: 345 } },     // 33
    { flop: true, modulate: { hue: 105 } }       // 34
  ];

  for (let i = 0; i < transformations.length; i++) {
    const srcIndex = (i % 13) + 1; // Cycle through 1 to 13
    const srcPath = path.join(imagesDir, `img${srcIndex}.jpg`);
    const destPath = path.join(imagesDir, `img${newImgIndex}.jpg`);
    
    try {
      if (fs.existsSync(srcPath)) {
        let image = sharp(srcPath);
        if (transformations[i].flop) {
          image = image.flop();
        }
        if (transformations[i].modulate) {
          image = image.modulate(transformations[i].modulate);
        }
        await image.toFile(destPath);
        console.log(`Generated ${destPath}`);
      }
    } catch (err) {
      console.error(`Error generating ${destPath}:`, err);
    }
    newImgIndex++;
  }
}

generateMoreImages();

