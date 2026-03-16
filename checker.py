import os
import re

script_path = r"d:\MY CODES\patrick\Thesecretflorist\script.js"
assets_path = r"d:\MY CODES\patrick\Thesecretflorist\assets"

with open(script_path, "r", encoding="utf-8") as f:
    content = f.read()

# find all image: "assets/..."
matches = re.findall(r'image\s*:\s*["\'](assets/[^"\']+)["\']', content)

missing = []
for m in matches:
    asset_file = os.path.basename(m)
    full_path = os.path.join(assets_path, asset_file)
    if not os.path.exists(full_path):
        missing.append(m)

print(f"Total images found: {len(matches)}")
print(f"Missing images: {len(missing)}")
for m in missing:
    print("MISSING:", m)
