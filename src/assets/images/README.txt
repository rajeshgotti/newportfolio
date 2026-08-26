PROFILE PHOTO — how to add it
================================

The About section expects a file at:
    src/assets/images/rajesh.jpg

The photo you shared came through as a text file, so the binary was corrupted
during upload. To add your real photo, do ONE of the following:

Option 1 (recommended, from Explorer):
  1. Open your image in your file explorer
  2. Copy or drag it into this folder:
     c:\Users\Administrator\Desktop\portfolio-angular\portfolio\src\assets\images\
  3. Rename it to exactly:  rajesh.jpg
  4. Refresh the browser (Ctrl+F5)

Option 2 (from a specific file):
  In PowerShell, run:
    Copy-Item "C:\path\to\your\photo.jpg" `
              "c:\Users\Administrator\Desktop\portfolio-angular\portfolio\src\assets\images\rajesh.jpg"

Photo tips:
  - Portrait / 4:5 aspect ratio works best (the frame uses 4:5)
  - 800×1000 px or larger is ideal
  - Face centred; upper-body / headshot works well
  - JPG or PNG both fine — if you use PNG, either keep the filename as
    rajesh.jpg (browsers don't care) or update the src in
    about.component.html to point at rajesh.png
