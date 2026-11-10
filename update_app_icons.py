import os
from PIL import Image, ImageDraw

SRC_PATH = r'C:/Users/giang/.gemini/antigravity/brain/e8d60430-71b7-4cf0-be63-22170efcd059/.user_uploaded/media_1794328133009_0351eeb8.jpg'
ROOT = os.path.dirname(os.path.abspath(__file__))

print(f"Loading source icon from: {SRC_PATH}")
src = Image.open(SRC_PATH).convert('RGB')
print(f"Source size: {src.size}, mode: {src.mode}")

# 1. PWA & Web Avatars
print("\n--- Generating Web / PWA Avatars ---")
avatar512 = src.resize((512, 512), Image.Resampling.LANCZOS)
avatar512.save(os.path.join(ROOT, 'avatar.jpg'), 'JPEG', quality=95)
print("Saved avatar.jpg (512x512)")

avatar192 = src.resize((192, 192), Image.Resampling.LANCZOS)
avatar192.save(os.path.join(ROOT, 'avatar192.jpg'), 'JPEG', quality=95)
print("Saved avatar192.jpg (192x192)")

# 2. iOS AppIcon
print("\n--- Generating iOS AppIcon ---")
ios_dir = os.path.join(ROOT, 'ios', 'App', 'App', 'Assets.xcassets', 'AppIcon.appiconset')
if os.path.exists(ios_dir):
    ios_sizes = [20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024]
    for size in ios_sizes:
        resized = src.resize((size, size), Image.Resampling.LANCZOS)
        out_path = os.path.join(ios_dir, f'AppIcon-{size}.png')
        resized.save(out_path, 'PNG', optimize=True)
        print(f"Saved iOS AppIcon: AppIcon-{size}.png ({size}x{size})")

    # Also update 512@2x which Xcode uses as 1024
    out_1024 = os.path.join(ios_dir, 'AppIcon-512@2x.png')
    src.resize((1024, 1024), Image.Resampling.LANCZOS).save(out_1024, 'PNG', optimize=True)
    print("Saved iOS AppIcon-512@2x.png (1024x1024)")

# 3. Android mipmap icons
print("\n--- Generating Android Icons ---")
android_res = os.path.join(ROOT, 'android', 'app', 'src', 'main', 'res')

# Helper to create circular cropped image
def make_round(img, size):
    scaled = img.resize((size, size), Image.Resampling.LANCZOS).convert('RGBA')
    mask = Image.new('L', (size * 4, size * 4), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size * 4 - 1, size * 4 - 1), fill=255)
    mask = mask.resize((size, size), Image.Resampling.LANCZOS)
    output = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    output.paste(scaled, (0, 0), mask)
    return output

# Helper to create adaptive foreground (scaled down to fit within circular viewport)
def make_foreground(img, canvas_size):
    # Scale image to 72% of canvas size to guarantee it sits inside safe viewport
    target_inner = int(canvas_size * 0.72)
    scaled = img.resize((target_inner, target_inner), Image.Resampling.LANCZOS).convert('RGBA')
    fg = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    offset = (canvas_size - target_inner) // 2
    fg.paste(scaled, (offset, offset))
    return fg

density_specs = {
    'mipmap-mdpi':    {'launcher': 48,  'fg': 108},
    'mipmap-hdpi':    {'launcher': 72,  'fg': 162},
    'mipmap-xhdpi':   {'launcher': 96,  'fg': 216},
    'mipmap-xxhdpi':  {'launcher': 144, 'fg': 324},
    'mipmap-xxxhdpi': {'launcher': 192, 'fg': 432},
}

for folder, spec in density_specs.items():
    fdir = os.path.join(android_res, folder)
    if not os.path.exists(fdir):
        os.makedirs(fdir, exist_ok=True)

    # 1. ic_launcher.png (standard square with dark background)
    l_size = spec['launcher']
    launcher_img = src.resize((l_size, l_size), Image.Resampling.LANCZOS)
    launcher_img.save(os.path.join(fdir, 'ic_launcher.png'), 'PNG', optimize=True)

    # 2. ic_launcher_round.png (circular crop)
    round_img = make_round(src, l_size)
    round_img.save(os.path.join(fdir, 'ic_launcher_round.png'), 'PNG', optimize=True)

    # 3. ic_launcher_foreground.png (adaptive foreground)
    fg_size = spec['fg']
    fg_img = make_foreground(src, fg_size)
    fg_img.save(os.path.join(fdir, 'ic_launcher_foreground.png'), 'PNG', optimize=True)

    print(f"Generated Android {folder}: ic_launcher ({l_size}px), round ({l_size}px), fg ({fg_size}px)")

# Update ic_launcher_background.xml
bg_xml = os.path.join(android_res, 'values', 'ic_launcher_background.xml')
with open(bg_xml, 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#111111</color>\n</resources>\n')
print("\nUpdated ic_launcher_background.xml to #111111")

print("\nALL APP ICONS SUCCESSFULLY UPDATED!")
