import glob, os
import re
import json
lucky=[]
for file in glob.glob("*2.txt"):
    with open(file) as f:
        #get the first number of the file name 
        num = re.search('[0-9]+', file).group()
        lines = f.readlines()
        for i in range(0, len(lines)):
            line = lines[i]
            if num in line:
                title = line.strip()
                content = "".join(lines[i+1:i+12]).strip()
        lucky.append({"title":title, "content":content, "image":"./images/Qian/"+str(num)+".jpg"})

with open("lucky.json", "w") as outfile: 
    json.dump(lucky, outfile) 
