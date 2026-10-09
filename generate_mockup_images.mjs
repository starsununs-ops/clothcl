import fs from 'fs';
import path from 'path';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        fs.unlink(dest, () => reject(`Failed to download, status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err.message));
    });
  });
};

async function generateImages() {
  const destDir = path.join(process.cwd(), 'public', 'images', 'generated');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const tasks = [
    // 1. Hero Wide Image (4 mannequins)
    {
      name: 'hero_main.jpg',
      prompt: 'High fashion editorial photography of four headless tailor mannequins wearing different elegant women winter outfits. Left: blue floral coat. Middle-left: white draped gown. Middle-right: black floral jumpsuit. Right: brown tailored suit. Set in a minimal beige Mediterranean arched studio with soft lighting. Highly detailed, photorealistic, 8k, no human models.',
      w: 1200, h: 600
    },
    // 2. Hero Fabrics (Vertical)
    { name: 'hero_fabric_bold.jpg', prompt: 'Macro photography of rich red velvet fabric texture, deep shadows.', w: 400, h: 800 },
    { name: 'hero_fabric_wild.jpg', prompt: 'Macro photography of wild blue and gold floral brocade fabric texture.', w: 400, h: 800 },
    { name: 'hero_fabric_soft.jpg', prompt: 'Macro photography of soft white silk chiffon fabric draped gracefully.', w: 400, h: 800 },
    { name: 'hero_fabric_shy.jpg', prompt: 'Macro photography of subtle beige textured linen fabric with delicate weave.', w: 400, h: 800 },
    { name: 'hero_fabric_command.jpg', prompt: 'Macro photography of sharp dark brown tailored wool suiting fabric.', w: 400, h: 800 },
    { name: 'hero_fabric_ease.jpg', prompt: 'Macro photography of relaxed pink floral cotton fabric texture.', w: 400, h: 800 },
    
    // 3. Moods (Landscape Mannequins)
    { name: 'mood_bold.jpg', prompt: 'Headless tailor mannequin wearing a bold crimson red architectural dress. Minimalist beige arched studio background, soft cinematic lighting.', w: 800, h: 600 },
    { name: 'mood_wild.jpg', prompt: 'Headless tailor mannequin wearing a wild blue and gold patterned trouser suit. Minimalist beige arched studio background, soft cinematic lighting.', w: 800, h: 600 },
    { name: 'mood_soft.jpg', prompt: 'Headless tailor mannequin wearing a soft flowing white silk draped gown. Minimalist beige arched studio background, soft cinematic lighting.', w: 800, h: 600 },
    { name: 'mood_shy.jpg', prompt: 'Headless tailor mannequin wearing a shy subtle beige belted linen dress with puff sleeves. Minimalist beige arched studio background, soft cinematic lighting.', w: 800, h: 600 },
    { name: 'mood_command.jpg', prompt: 'Headless tailor mannequin wearing a sharp dark brown tailored wool blazer and skirt. Minimalist beige arched studio background, soft cinematic lighting.', w: 800, h: 600 },
    { name: 'mood_ease.jpg', prompt: 'Headless tailor mannequin wearing a relaxed pink floral wrap dress. Minimalist beige arched studio background, soft cinematic lighting.', w: 800, h: 600 },

    // 4. Details Collage (Square)
    { name: 'detail_lace.jpg', prompt: 'Macro photography of exquisite white floral lace applique.', w: 400, h: 400 },
    { name: 'detail_button.jpg', prompt: 'Macro photography of a vintage gold button on textured tweed fabric.', w: 400, h: 400 },
    { name: 'detail_denim.jpg', prompt: 'Macro photography of dark blue denim fabric with gold stitching.', w: 400, h: 400 },
    { name: 'detail_silk.jpg', prompt: 'Macro photography of deep burgundy silk satin fabric draped.', w: 400, h: 400 },
    { name: 'detail_floral.jpg', prompt: 'Macro photography of a beautiful floral printed fabric.', w: 400, h: 400 },
    { name: 'detail_arch.jpg', prompt: 'Beautiful classical European building architecture with arches, warm sunlight, beige stone.', w: 400, h: 400 }, // City building replacing one detail

    // 5. Designs (Small dresses)
    { name: 'design_1.jpg', prompt: 'A simple elegant white dress on a headless mannequin, light background.', w: 300, h: 500 },
    { name: 'design_2.jpg', prompt: 'A blue floral suit on a headless mannequin, light background.', w: 300, h: 500 },
    { name: 'design_3.jpg', prompt: 'A brown belted dress on a headless mannequin, light background.', w: 300, h: 500 },
    { name: 'design_4.jpg', prompt: 'A sharp navy blue coat dress on a headless mannequin, light background.', w: 300, h: 500 },
    { name: 'design_5.jpg', prompt: 'A pink patterned wrap dress on a headless mannequin, light background.', w: 300, h: 500 },
    { name: 'design_6.jpg', prompt: 'A black floral jumpsuit on a headless mannequin, light background.', w: 300, h: 500 },

    // 6. Footer Workspace
    { name: 'footer_workspace.jpg', prompt: 'A fashion designer workspace desk viewed from above. Sketches of dresses, fabric swatches, measuring tape, golden scissors, on a clean beige table. Soft lighting, highly detailed aesthetic.', w: 1200, h: 400 }
  ];

  for (const task of tasks) {
    const encodedPrompt = encodeURIComponent(task.prompt);
    // Use nologo=true to remove watermark and enhance=true for better quality
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${task.w}&height=${task.h}&nologo=true`;
    const dest = path.join(destDir, task.name);
    console.log(`Downloading ${task.name}...`);
    try {
      await download(url, dest);
      console.log(`Successfully downloaded ${task.name}`);
    } catch (err) {
      console.error(`Failed to download ${task.name}:`, err);
    }
  }
}

generateImages();
