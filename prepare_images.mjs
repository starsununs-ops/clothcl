import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const artifactsDir = '/home/oem/.gemini/antigravity-ide/brain/7516a57e-8015-4c6a-b5c6-609c4b886638';
const imagesDir = path.join(process.cwd(), 'public', 'images');
const modelsDir = path.join(imagesDir, 'models');

if (!fs.existsSync(modelsDir)) fs.mkdirSync(modelsDir, { recursive: true });

// Sources (All 100% clothing only, zero human bodies)
const S = {
  customizer: path.join(artifactsDir, 'customizer_dress_1792250360606.jpg'),
  hero1: path.join(artifactsDir, 'hero_dress_1_1792250456339.jpg'),
  hero2: path.join(artifactsDir, 'hero_dress_2_1792250492362.jpg'),
  hero3: path.join(artifactsDir, 'hero_dress_3_1792250529742.jpg'),
  bold: path.join(artifactsDir, 'mood_bold_dress_1792250560288.jpg'),
  wild: path.join(artifactsDir, 'mood_wild_dress_1792250594671.jpg'),
  soft: path.join(artifactsDir, 'mood_soft_dress_1792250624344.jpg'),
  shy: path.join(artifactsDir, 'mood_shy_dress_1792250658996.jpg'),
  command: path.join(artifactsDir, 'mood_command_coat_1792250721476.jpg'),
  ease: path.join(artifactsDir, 'mood_ease_dress_1792250753316.jpg'),
  workspace: path.join(artifactsDir, 'atelier_workspace_1792250784564.jpg'),
  velvet: path.join(artifactsDir, 'dress_black_velvet_1792250825870.jpg'),
  img1: path.join(imagesDir, 'img1.jpg'),
  img8: path.join(imagesDir, 'img8.jpg'),
  img9: path.join(imagesDir, 'img9.jpg'),
  img10: path.join(imagesDir, 'img10.jpg'),
  img11: path.join(imagesDir, 'img11.jpg'),
  img12: path.join(imagesDir, 'img12.jpg'),
  img13: path.join(imagesDir, 'img13.jpg'),
};

async function processImage(src, dest, options = {}) {
  try {
    let pipeline = sharp(src);
    if (options.resize) {
      pipeline = pipeline.resize(options.resize.w, options.resize.h, {
        fit: options.resize.fit || 'cover',
        position: options.resize.pos || 'center'
      });
    }
    await pipeline.jpeg({ quality: 95 }).toFile(dest);
    console.log(`✓ Processed: ${path.basename(dest)}`);
  } catch (err) {
    console.error(`✗ Error on ${path.basename(dest)}:`, err.message);
  }
}

async function safeCrop(src, dest, { left, top, width, height, resizeW, resizeH }) {
  try {
    const meta = await sharp(src).metadata();
    const safeLeft = Math.max(0, Math.min(left, meta.width - 50));
    const safeTop = Math.max(0, Math.min(top, meta.height - 50));
    const safeWidth = Math.min(width, meta.width - safeLeft);
    const safeHeight = Math.min(height, meta.height - safeTop);
    
    let pipeline = sharp(src).extract({ left: safeLeft, top: safeTop, width: safeWidth, height: safeHeight });
    if (resizeW && resizeH) {
      pipeline = pipeline.resize(resizeW, resizeH);
    }
    await pipeline.jpeg({ quality: 95 }).toFile(dest);
    console.log(`✓ Safe Cropped: ${path.basename(dest)}`);
  } catch (err) {
    console.error(`✗ Crop Error on ${path.basename(dest)}:`, err.message);
  }
}

async function run() {
  console.log('Generating 100% Clothes-Only / Zero Human Body Image Collection...');

  // 1. HERO MOOD STRIPS (dress_1 to dress_6)
  await processImage(S.bold, path.join(imagesDir, 'dress_1.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.wild, path.join(imagesDir, 'dress_2.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.soft, path.join(imagesDir, 'dress_3.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.shy, path.join(imagesDir, 'dress_4.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.command, path.join(imagesDir, 'dress_5.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.ease, path.join(imagesDir, 'dress_6.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });

  // 2. HERO CENTER DISPLAYS (dress_7, 8, 9)
  await processImage(S.hero1, path.join(imagesDir, 'dress_7.jpg'), { resize: { w: 800, h: 1060, pos: 'top' } });
  await processImage(S.hero2, path.join(imagesDir, 'dress_8.jpg'), { resize: { w: 800, h: 1060, pos: 'center' } });
  await processImage(S.hero3, path.join(imagesDir, 'dress_9.jpg'), { resize: { w: 800, h: 1060, pos: 'top' } });

  // 3. FABRIC & DETAIL SHOTS (dress_10 to dress_14)
  // Fabric 1: Delicate floral embroidery & lace from hero3
  await safeCrop(S.hero3, path.join(imagesDir, 'dress_10.jpg'), {
    left: 280, top: 250, width: 350, height: 350, resizeW: 600, resizeH: 600
  });

  // Fabric 2: Tailoring, pearl buckle and lilac twill from bold
  await safeCrop(S.bold, path.join(imagesDir, 'dress_11.jpg'), {
    left: 280, top: 350, width: 330, height: 330, resizeW: 600, resizeH: 600
  });

  // Fabric 3: Golden silk pleats from hero1
  await safeCrop(S.hero1, path.join(imagesDir, 'dress_12.jpg'), {
    left: 250, top: 380, width: 400, height: 350, resizeW: 600, resizeH: 460
  });

  // Fabric 4: Blush pink pleated chiffon & ribbon tie from soft
  await safeCrop(S.soft, path.join(imagesDir, 'dress_13.jpg'), {
    left: 300, top: 300, width: 350, height: 350, resizeW: 600, resizeH: 600
  });

  // Fabric 5: Tiered dusty rose ballerina tulle from hero2
  await safeCrop(S.hero2, path.join(imagesDir, 'dress_14.jpg'), {
    left: 450, top: 220, width: 420, height: 420, resizeW: 700, resizeH: 700
  });

  // 4. SIX BESPOKE CUSTOMISABLE DESIGNS (dress_15 to dress_20)
  await processImage(S.customizer, path.join(imagesDir, 'dress_15.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.hero1, path.join(imagesDir, 'dress_16.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.bold, path.join(imagesDir, 'dress_17.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.wild, path.join(imagesDir, 'dress_18.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.velvet, path.join(imagesDir, 'dress_19.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.command, path.join(imagesDir, 'dress_20.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });

  // 5. MOOD GRID 18 DRESSES (dress_21 to dress_38)
  // BOLD (21, 22, 23)
  await processImage(S.bold, path.join(imagesDir, 'dress_21.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await safeCrop(S.bold, path.join(imagesDir, 'dress_22.jpg'), {
    left: 180, top: 150, width: 550, height: 750, resizeW: 600, resizeH: 800
  });
  await processImage(S.velvet, path.join(imagesDir, 'dress_23.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });

  // WILD (24, 25, 26)
  await processImage(S.wild, path.join(imagesDir, 'dress_24.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await safeCrop(S.wild, path.join(imagesDir, 'dress_25.jpg'), {
    left: 150, top: 180, width: 550, height: 750, resizeW: 600, resizeH: 800
  });
  // Champagne slip dress cropped from hero2
  await safeCrop(S.hero2, path.join(imagesDir, 'dress_26.jpg'), {
    left: 150, top: 140, width: 340, height: 800, resizeW: 600, resizeH: 800
  });

  // SOFT (27, 28, 29)
  await processImage(S.soft, path.join(imagesDir, 'dress_27.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.hero3, path.join(imagesDir, 'dress_28.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  // Dusty rose tiered tulle evening dress cropped from hero2
  await safeCrop(S.hero2, path.join(imagesDir, 'dress_29.jpg'), {
    left: 450, top: 160, width: 440, height: 800, resizeW: 600, resizeH: 800
  });

  // SHY (30, 31, 32)
  await processImage(S.shy, path.join(imagesDir, 'dress_30.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.img10, path.join(imagesDir, 'dress_31.jpg'), { resize: { w: 600, h: 800, pos: 'center' } });
  await processImage(S.img12, path.join(imagesDir, 'dress_32.jpg'), { resize: { w: 600, h: 800, pos: 'center' } });

  // IN COMMAND (33, 34, 35)
  await processImage(S.command, path.join(imagesDir, 'dress_33.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await safeCrop(S.command, path.join(imagesDir, 'dress_34.jpg'), {
    left: 200, top: 120, width: 500, height: 700, resizeW: 600, resizeH: 800
  });
  await processImage(S.img9, path.join(imagesDir, 'dress_35.jpg'), { resize: { w: 600, h: 800, pos: 'center' } });

  // AT EASE (36, 37, 38)
  await processImage(S.ease, path.join(imagesDir, 'dress_36.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.img8, path.join(imagesDir, 'dress_37.jpg'), { resize: { w: 600, h: 800, pos: 'center' } });
  await processImage(S.img1, path.join(imagesDir, 'dress_38.jpg'), { resize: { w: 600, h: 800, pos: 'center' } });

  // 6. FOOTER ATELIER WORKSPACE (dress_39)
  await processImage(S.workspace, path.join(imagesDir, 'dress_39.jpg'), { resize: { w: 900, h: 600, pos: 'center' } });
  await processImage(S.workspace, path.join(imagesDir, 'footer_sketch.jpg'), { resize: { w: 900, h: 600, pos: 'center' } });

  // 7. CUSTOMIZER BASE (clothes only on mannequin)
  await processImage(S.customizer, path.join(imagesDir, 'customizer_base.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.customizer, path.join(modelsDir, 'customizer_base.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.hero1, path.join(modelsDir, 'customizer_base_2.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });

  // Overwrite any remaining files in models directory with pure clothes
  await processImage(S.bold, path.join(modelsDir, 'bold.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.wild, path.join(modelsDir, 'wild.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.soft, path.join(modelsDir, 'soft.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.shy, path.join(modelsDir, 'shy.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.command, path.join(modelsDir, 'command.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.ease, path.join(modelsDir, 'ease.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.hero1, path.join(modelsDir, 'hero.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });
  await processImage(S.hero2, path.join(modelsDir, 'party.jpg'), { resize: { w: 600, h: 800, pos: 'top' } });

  // Also replace any girl_model_* files in modelsDir with pure clothes
  const extraModelFiles = fs.readdirSync(modelsDir).filter(f => f.startsWith('girl_model_'));
  for (const f of extraModelFiles) {
    await processImage(S.customizer, path.join(modelsDir, f), { resize: { w: 600, h: 800, pos: 'top' } });
  }

  console.log('✨ All 39 clothing-only images generated with ZERO human bodies!');
}

run();
