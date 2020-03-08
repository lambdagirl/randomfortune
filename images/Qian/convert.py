import glob, os
import subprocess
for file in glob.glob("*2.jpg"):
    subprocess.run(["tesseract", file, file.split(".")[0]])
