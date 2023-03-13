import os

# get the current working directory
dir_path = os.getcwd()

# get all the jpeg files in the directory
files = [f for f in os.listdir(dir_path) if f.endswith('.jpeg')]

# sort the files numerically
files = sorted(files, key=lambda x: int(os.path.splitext(x)[0]))

# iterate through each file and rename it to its current index
for i, file_name in enumerate(files):
    # get the file extension
    file_ext = os.path.splitext(file_name)[1]
    
    # construct the new file name
    new_file_name = str(i+1) + file_ext
    
    # rename the file
    os.rename(os.path.join(dir_path, file_name), os.path.join(dir_path, new_file_name))
    
    print(f"Renamed {file_name} to {new_file_name}")
