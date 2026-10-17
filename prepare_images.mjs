import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const modelsDir = path.join(imagesDir, 'models');

async function processImage(src, dest, options = {}) {
  try {
    let pipeline = sharp(src);
    
    if (options.crop) {
      pipeline = pipeline.extract(options.crop);
    }
    
    if (options.resize) {
      pipeline = pipeline.resize(options.resize.w, options.resize.h, {
        fit: options.resize.fit || 'cover',
        position: options.resize.pos || 'center'
      });
    }

    await pipeline.jpeg({ quality: 95 }).toFile(dest);
    console.log(`Created: ${path.basename(dest)}`);
  } catch (err) {
    console.error(`Failed ${path.basename(dest)}:`, err.message);
  }
}

async function run() {
  console.log('Generating high-res natural modern clothing & girl model images...');

  // 1. HERO MOOD STRIPS (dress_1 to dress_6) - 6 moods
  await processImage(path.join(modelsDir, 'bold.jpg'), path.join(imagesDir, 'dress_1.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'wild.jpg'), path.join(imagesDir, 'dress_2.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'soft.jpg'), path.join(imagesDir, 'dress_3.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'shy.jpg'), path.join(imagesDir, 'dress_4.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'command.jpg'), path.join(imagesDir, 'dress_5.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'ease.jpg'), path.join(imagesDir, 'dress_6.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });

  // 2. HERO CENTER DISPLAYS (dress_7, 8, 9)
  await processImage(path.join(modelsDir, 'hero.jpg'), path.join(imagesDir, 'dress_7.jpg'), {
    resize: { w: 600, h: 800, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'party.jpg'), path.join(imagesDir, 'dress_8.jpg'), {
    resize: { w: 600, h: 800, pos: 'center' }
  });
  await processImage(path.join(modelsDir, 'girl_model_soft_1792227926720.jpg'), path.join(imagesDir, 'dress_9.jpg'), {
    resize: { w: 600, h: 800, pos: 'top' }
  });

  // 3. FABRIC & DETAIL SHOTS (dress_10 to dress_14) - Ultra sharp crops from high-res source files
  // Fabric 1: Delicate lace & embroidery ruffles
  await sharp(path.join(modelsDir, 'hero.jpg'))
    .extract({ left: 320, top: 340, width: 400, height: 400 })
    .resize(600, 600)
    .jpeg({ quality: 95 })
    .toFile(path.join(imagesDir, 'dress_10.jpg'));

  // Fabric 2: Tailoring, pearl buckle and lilac twill
  await sharp(path.join(modelsDir, 'bold.jpg'))
    .extract({ left: 380, top: 360, width: 320, height: 320 })
    .resize(600, 600)
    .jpeg({ quality: 95 })
    .toFile(path.join(imagesDir, 'dress_11.jpg'));

  // Fabric 3: Parisian architecture & balcony
  await sharp(path.join(modelsDir, 'hero.jpg'))
    .extract({ left: 10, top: 10, width: 450, height: 350 })
    .resize(600, 460)
    .jpeg({ quality: 95 })
    .toFile(path.join(imagesDir, 'dress_12.jpg'));

  // Fabric 4: Sky-blue organza floral embroidery and ribbon
  await sharp(path.join(modelsDir, 'soft.jpg'))
    .extract({ left: 400, top: 320, width: 320, height: 320 })
    .resize(600, 600)
    .jpeg({ quality: 95 })
    .toFile(path.join(imagesDir, 'dress_13.jpg'));

  // Fabric 5: Liquid champagne silk & pink tulle
  await sharp(path.join(modelsDir, 'party.jpg'))
    .extract({ left: 300, top: 340, width: 450, height: 450 })
    .resize(700, 700)
    .jpeg({ quality: 95 })
    .toFile(path.join(imagesDir, 'dress_14.jpg'));

  // 4. SIX CUSTOMISABLE MODERN DESIGNS (dress_15 to dress_20)
  await processImage(path.join(modelsDir, 'customizer_base.jpg'), path.join(imagesDir, 'dress_15.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'hero.jpg'), path.join(imagesDir, 'dress_16.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'bold.jpg'), path.join(imagesDir, 'dress_17.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'command.jpg'), path.join(imagesDir, 'dress_18.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'shy.jpg'), path.join(imagesDir, 'dress_19.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'wild.jpg'), path.join(imagesDir, 'dress_20.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });

  // 5. MOOD GRID DRESSES (18 modern outfits = 6 moods x 3 dresses)
  // BOLD (21, 22, 23)
  await processImage(path.join(modelsDir, 'bold.jpg'), path.join(imagesDir, 'dress_21.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'bold.jpg'), path.join(imagesDir, 'dress_22.jpg'), {
    crop: { left: 100, top: 150, width: 700, height: 950 },
    resize: { w: 450, h: 650 }
  });
  await processImage(path.join(modelsDir, 'girl_model_bold_1792227894383.jpg'), path.join(imagesDir, 'dress_23.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });

  // WILD (24, 25, 26)
  await processImage(path.join(modelsDir, 'wild.jpg'), path.join(imagesDir, 'dress_24.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'wild.jpg'), path.join(imagesDir, 'dress_25.jpg'), {
    crop: { left: 150, top: 220, width: 680, height: 920 },
    resize: { w: 450, h: 650 }
  });
  await processImage(path.join(modelsDir, 'girl_model_wild_1792227946489.jpg'), path.join(imagesDir, 'dress_26.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });

  // SOFT (27, 28, 29)
  await processImage(path.join(modelsDir, 'soft.jpg'), path.join(imagesDir, 'dress_27.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'girl_model_soft_1792227926720.jpg'), path.join(imagesDir, 'dress_28.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  // Crop pink tulle girl from party.jpg
  await processImage(path.join(modelsDir, 'party.jpg'), path.join(imagesDir, 'dress_29.jpg'), {
    crop: { left: 450, top: 180, width: 440, height: 950 },
    resize: { w: 450, h: 650 }
  });

  // SHY (30, 31, 32)
  await processImage(path.join(modelsDir, 'shy.jpg'), path.join(imagesDir, 'dress_30.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'shy.jpg'), path.join(imagesDir, 'dress_31.jpg'), {
    crop: { left: 220, top: 180, width: 600, height: 800 },
    resize: { w: 450, h: 650 }
  });
  await processImage(path.join(modelsDir, 'customizer_base.jpg'), path.join(imagesDir, 'dress_32.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });

  // IN COMMAND (33, 34, 35)
  await processImage(path.join(modelsDir, 'command.jpg'), path.join(imagesDir, 'dress_33.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  await processImage(path.join(modelsDir, 'command.jpg'), path.join(imagesDir, 'dress_34.jpg'), {
    crop: { left: 160, top: 250, width: 580, height: 800 },
    resize: { w: 450, h: 650 }
  });
  await processImage(path.join(modelsDir, 'customizer_base_2.jpg'), path.join(imagesDir, 'dress_35.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });

  // AT EASE (36, 37, 38)
  await processImage(path.join(modelsDir, 'ease.jpg'), path.join(imagesDir, 'dress_36.jpg'), {
    resize: { w: 450, h: 650, pos: 'top' }
  });
  // Crop champagne silk girl from party.jpg
  await processImage(path.join(modelsDir, 'party.jpg'), path.join(imagesDir, 'dress_37.jpg'), {
    crop: { left: 180, top: 180, width: 380, height: 950 },
    resize: { w: 450, h: 650 }
  });
  await processImage(path.join(modelsDir, 'hero.jpg'), path.join(imagesDir, 'dress_38.jpg'), {
    crop: { left: 220, top: 200, width: 550, height: 850 },
    resize: { w: 450, h: 650 }
  });

  // 6. FOOTER SKETCHES & WORKSPACE (dress_39)
  const footerSource = path.join(imagesDir, 'footer_sketch.jpg');
  if (fs.existsSync(footerSource)) {
    await processImage(footerSource, path.join(imagesDir, 'dress_39.jpg'), {
      resize: { w: 700, h: 450 }
    });
  }

  console.log('Successfully completed 100% natural, modern, copyright-free girls clothes images!');
}

run();
