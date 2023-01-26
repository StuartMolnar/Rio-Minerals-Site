import os

# Get the current directory
current_dir = os.getcwd()

# Get a list of all files in the directory
files = os.listdir(current_dir)

# Initialize a counter variable
counter = 1

# Loop over each file
for file in files:
    # Get the file's current name
    old_name = file

    # Check if the file is a jpeg and not the script itself
    if old_name != "rename.py":
        # Create the new name in the format "X.jpeg"
        new_name = str(counter) + ".jpeg"

        # Increment the counter
        counter += 1

        # Use the os.rename() function to rename the file
        os.rename(old_name, new_name)
