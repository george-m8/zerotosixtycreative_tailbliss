import os
import argparse
from PIL import Image

def shrink_folder(folder, width):
    for fname in os.listdir(folder):
        path = os.path.join(folder, fname)
        if not os.path.isfile(path):
            continue
        if not fname.lower().endswith(('.jpg', '.jpeg', '.png')):
            print(f"Skipping {fname}: not '.jpg', '.jpeg' or '.png' format")
            continue

        with Image.open(path) as img:
            w, h = img.size
            if w <= width:
                # already smaller than target
                print(f"Skipping {fname}: already {w} pixels wide")
                continue
            new_h = int(h * (width / w))
            img.resize((width, new_h), Image.LANCZOS).save(path)
            print(f"Resized {fname} → {width}×{new_h}")

if __name__ == "__main__":
    p = argparse.ArgumentParser(
        description="Shrink all images in a folder to a target width."
    )
    p.add_argument("folder", help="Folder containing your images")
    p.add_argument(
        "--width", "-w", type=int, default=800,
        help="Target width in pixels (default: 800)"
    )
    args = p.parse_args()
    shrink_folder(args.folder, args.width)