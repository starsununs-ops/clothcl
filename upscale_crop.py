from PIL import Image
import os

# Create directory
os.makedirs('public/images', exist_ok=True)

# Open and upscale
img = Image.open('public/design.jpg')
# Upscale 2x
img = img.resize((2048, 1280), Image.Resampling.LANCZOS)

def crop_save(name, x, y, w, h):
    # multiply coords by 2 since we upscaled 2x
    x, y, w, h = x*2, y*2, w*2, h*2
    cropped = img.crop((x, y, x+w, y+h))
    cropped.save(f'public/images/{name}.jpg', quality=95)

# Hero models
crop_save('hero_model_1', 295, 85, 90, 160)
crop_save('hero_model_2', 390, 85, 90, 160)
crop_save('hero_model_3', 490, 85, 90, 160)

# Hero fabrics
for i in range(6):
    crop_save(f'hero_fabric_{i}', 630 + i*53, 125, 48, 120)

# Moods grids
crop_save('mood_bold', 140, 285, 210, 75)
crop_save('mood_wild', 435, 285, 210, 75)
crop_save('mood_soft', 730, 285, 210, 75)

crop_save('mood_shy', 140, 365, 210, 75)
crop_save('mood_in_command', 435, 365, 210, 75)
crop_save('mood_at_ease', 730, 365, 210, 75)

# Features
crop_save('features_fabrics', 200, 455, 270, 95)
crop_save('features_dresses', 670, 455, 290, 80)

# Footer sketch
crop_save('footer_sketch', 700, 560, 250, 80)

print("Upscaled and cropped successfully!")
