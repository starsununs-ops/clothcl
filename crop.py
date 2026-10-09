from PIL import Image

img = Image.open('public/design.jpg')
width, height = img.size # 1024 x 640

def crop_save(name, x, y, w, h):
    cropped = img.crop((x, y, x+w, y+h))
    cropped.save(f'public/images/{name}.jpg')

# Hero models
crop_save('hero_model_1', 295, 85, 90, 160)
crop_save('hero_model_2', 390, 85, 90, 160)
crop_save('hero_model_3', 490, 85, 90, 160)

# Hero fabrics
for i in range(6):
    crop_save(f'hero_fabric_{i}', 630 + i*53, 125, 48, 120)

# Moods grids (6 grids)
# Each grid has 3 models on the right side.
# Grids are in 2 columns, 3 rows.
# Col 1: X=65 to 350. Models are at X=150 to 350.
# Col 2: X=360 to 650. Wait, no. Grid is 3 columns? 
# No, "what's ur mood" section has 3 columns in the design! 
# Let me look closely at the image: BOLD, WILD, SOFT. SHY, IN COMMAND, AT EASE.
# Ah! It's a 3x2 grid! 3 columns, 2 rows! 
# Col 1: BOLD, SHY
# Col 2: WILD, IN COMMAND
# Col 3: SOFT, AT EASE
# Wait, in the image: 
# Row 1: BOLD, WILD, SOFT
# Row 2: SHY, IN COMMAND, AT EASE
# Each item has 3 models.
# Let's crop the 3 models block for each mood as a single image to save time.
# BOLD models: x=140, y=285, w=210, h=75
crop_save('mood_bold', 140, 285, 210, 75)
crop_save('mood_wild', 435, 285, 210, 75)
crop_save('mood_soft', 730, 285, 210, 75)

crop_save('mood_shy', 140, 365, 210, 75)
crop_save('mood_in_command', 435, 365, 210, 75)
crop_save('mood_at_ease', 730, 365, 210, 75)

# Details that move with you (fabrics)
# Big block on bottom left. X=65, Y=450, W=400, H=100
# It has 5 fabric pieces. I'll just crop the whole fabric block!
crop_save('features_fabrics', 200, 455, 270, 95)

# One piece many moods (6 dresses)
# X=670 to 950, Y=455 to 535
crop_save('features_dresses', 670, 455, 290, 80)

# Footer sketch
crop_save('footer_sketch', 700, 560, 250, 80)

print("Cropped successfully!")
