from PIL import Image
import os

img = Image.open('public/design_new.jpg')
# upscale 2x for better resolution just in case
img = img.resize((2048, 1442), Image.Resampling.LANCZOS)

def crop_save(name, x, y, w, h):
    x, y, w, h = x*2, y*2, w*2, h*2
    cropped = img.crop((x, y, x+w, y+h))
    cropped.save(f'public/images/{name}.jpg', quality=95)

crop_save('plant_top_left', 0, 50, 100, 150)
crop_save('plant_mid_left', 65, 500, 50, 80)
crop_save('plant_mid_center', 465, 500, 50, 80)
crop_save('plant_bottom_right', 700, 600, 324, 121)

print("Plants cropped!")
