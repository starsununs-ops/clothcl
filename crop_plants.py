from PIL import Image
img = Image.open('public/design.jpg')

def crop_save(name, x, y, w, h):
    cropped = img.crop((x, y, x+w, y+h))
    cropped.save(f'public/images/{name}.jpg')

crop_save('plant_top_left', 55, 55, 75, 195)
crop_save('plant_mid_left', 60, 450, 45, 95)
crop_save('plant_mid_center', 465, 450, 45, 95)
crop_save('plant_bottom_right', 880, 560, 70, 80)
print("Plants cropped!")
