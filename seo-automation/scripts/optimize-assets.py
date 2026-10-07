#!/usr/bin/env python3
"""
Asset Optimization Script for The Secret Florist
Compresses oversized WebP, PNG, and JPEG images while preserving visual quality.
Usage:
    python scripts/optimize-assets.py [--dry-run] [--assets-dir ../assets]
"""

import os
import sys
import io
import argparse
from PIL import Image

def optimize_image(filepath, dry_run=False):
    orig_size = os.path.getsize(filepath)
    ext = os.path.splitext(filepath)[1].lower()

    if ext not in ('.webp', '.png', '.jpg', '.jpeg'):
        return 0, orig_size, orig_size

    try:
        with Image.open(filepath) as img:
            buf = io.BytesIO()

            if ext == '.webp':
                # Preserve transparency if alpha channel exists
                has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
                save_mode = 'RGBA' if has_alpha else 'RGB'
                if img.mode != save_mode:
                    converted = img.convert(save_mode)
                else:
                    converted = img
                converted.save(buf, format='WEBP', quality=82, method=4)

            elif ext == '.png':
                # Lossless PNG optimization
                img.save(buf, format='PNG', optimize=True)

            elif ext in ('.jpg', '.jpeg'):
                converted = img.convert('RGB') if img.mode != 'RGB' else img
                converted.save(buf, format='JPEG', quality=82, optimize=True, progressive=True)

            new_size = len(buf.getvalue())

            # Only update if we achieved a meaningful reduction (at least 2% smaller)
            if new_size < orig_size * 0.98:
                if not dry_run:
                    with open(filepath, 'wb') as f:
                        f.write(buf.getvalue())
                return 1, orig_size, new_size
            else:
                return 0, orig_size, orig_size

    except Exception as e:
        print(f"  [Warning] Could not optimize {filepath}: {e}", file=sys.stderr)
        return 0, orig_size, orig_size

def main():
    parser = argparse.ArgumentParser(description="Optimize image assets")
    parser.add_argument("--assets-dir", default=os.path.join(os.path.dirname(__file__), "..", "..", "assets"),
                        help="Path to assets directory")
    parser.add_argument("--dry-run", action="store_true", help="Calculate savings without modifying files")
    args = parser.parse_args()

    assets_dir = os.path.abspath(args.assets_dir)
    if not os.path.isdir(assets_dir):
        print(f"Error: assets directory not found at {assets_dir}")
        sys.exit(1)

    mode_str = "[DRY RUN] " if args.dry_run else ""
    print(f"\n{mode_str}Optimizing image assets in: {assets_dir}\n")

    total_files = 0
    optimized_files = 0
    total_orig = 0
    total_new = 0

    for root, _, files in os.walk(assets_dir):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in ('.webp', '.png', '.jpg', '.jpeg'):
                total_files += 1
                fp = os.path.join(root, f)
                opt, orig_sz, new_sz = optimize_image(fp, dry_run=args.dry_run)
                total_orig += orig_sz
                total_new += new_sz
                if opt:
                    optimized_files += 1
                    rel = os.path.relpath(fp, assets_dir)
                    saved_kb = (orig_sz - new_sz) / 1024
                    pct = 100 * (1 - new_sz / orig_sz)
                    print(f"  [OK] {rel:35} {orig_sz/1024:6.1f} KB -> {new_sz/1024:6.1f} KB (-{saved_kb:5.1f} KB, -{pct:4.1f}%)")

    saved_mb = (total_orig - total_new) / (1024 * 1024)
    pct_total = 100 * (1 - total_new / total_orig) if total_orig > 0 else 0

    print(f"\n==========================================")
    print(f"Total images scanned : {total_files}")
    print(f"Files optimized      : {optimized_files}")
    print(f"Original total size  : {total_orig / (1024 * 1024):.2f} MB")
    print(f"Optimized total size : {total_new / (1024 * 1024):.2f} MB")
    print(f"Total space saved    : {saved_mb:.2f} MB ({pct_total:.1f}% reduction)")
    print(f"==========================================\n")

if __name__ == "__main__":
    main()
