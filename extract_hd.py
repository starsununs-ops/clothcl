import os
from PIL import Image, ImageEnhance

img_path = '/home/oem/.gemini/antigravity/brain/fdb9a6eb-37ff-4067-8ae6-56026624fa5f/.user_uploaded/media_1791531022713_367bf1b6.jpg'
img = Image.open(img_path).convert('RGB')
w, h = img.size

os.makedirs('public/images/optimized', exist_ok=True)

def crop_and_optimize(name, x, y, cw, ch, scale=3):
    # crop
    cropped = img.crop((x, y, x + cw, y + ch))
    # upscale
    upscaled = cropped.resize((cw * scale, ch * scale), Image.Resampling.LANCZOS)
    
    # enhance sharpness and color a bit to make it look HD
    sharpener = ImageEnhance.Sharpness(upscaled)
    upscaled = sharpener.enhance(1.5)
    
    colorer = ImageEnhance.Color(upscaled)
    upscaled = colorer.enhance(1.1)
    
    contraster = ImageEnhance.Contrast(upscaled)
    upscaled = contraster.enhance(1.05)
    
    upscaled.save(f'public/images/optimized/{name}.jpg', quality=95)
    return upscaled

# 1. Plants
crop_and_optimize('plant_top_left', 0, 0, 180, 240)
crop_and_optimize('plant_top_right', 850, 0, 174, 200)
crop_and_optimize('plant_mid_left', 0, 300, 100, 200)
crop_and_optimize('plant_bottom_right', 800, 500, 224, 182)

# 2. Hero Dresses (4 dresses)
crop_and_optimize('hero_dress_1', 255, 60, 85, 180)
crop_and_optimize('hero_dress_2', 345, 60, 75, 180)
crop_and_optimize('hero_dress_3', 425, 60, 75, 180)
crop_and_optimize('hero_dress_4', 505, 60, 90, 180)

# 3. Hero Fabrics (6 items)
for i in range(6):
    crop_and_optimize(f'hero_fabric_{i}', 640 + i*57, 100, 55, 130)

# 4. Mood grids (6 grids, each has 3 dresses)
# Row 1
crop_and_optimize('mood_bold_dresses', 70, 275, 245, 80)
crop_and_optimize('mood_wild_dresses', 410, 275, 230, 80)
crop_and_optimize('mood_soft_dresses', 730, 275, 245, 80)
# Row 2
crop_and_optimize('mood_shy_dresses', 70, 365, 245, 80)
crop_and_optimize('mood_in_command_dresses', 430, 365, 210, 80)
crop_and_optimize('mood_at_ease_dresses', 730, 365, 245, 80)

# 5. Features fabrics (Bottom left mosaic)
crop_and_optimize('features_fabrics_mosaic', 150, 465, 365, 105)

# 6. Features 6 custom dresses
crop_and_optimize('features_custom_dresses', 670, 475, 300, 95)

# 7. Footer sketch
crop_and_optimize('footer_sketch', 750, 580, 274, 100)

print("All crops optimized and saved to public/images/optimized")
