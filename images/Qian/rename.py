# Pythono3 code to rename multiple  
# files in a directory or folder 
import glob, os ,re
  
# Function to rename multiple files 
def main(): 
    i = 0
      
    for filename in glob.glob("*2.jpg"):
        num = re.search('[0-9]+', filename).group()
        dst = str(num) +".jpg"
          
        # rename() function will 
        # rename all the files 
        os.rename(filename, dst) 
  
# Driver Code 
if __name__ == '__main__': 
      
    # Calling main() function 
    main() 