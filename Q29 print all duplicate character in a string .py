def printDuplicates(str):
    # Converting string to list of characters
    char_list = list(str)
    # Sorting the list of characters
    char_list.sort()
    
    # Loop through the sorted list to find duplicates
    i = 0
    while i < len(char_list):
        count = 1
        # Counting the occurrences of each character
        while i < len(char_list)-1 and char_list[i] == char_list[i+1]:
            count += 1
            i += 1
        
        # Printing the duplicate character and its count
        if count > 1:
            print(char_list[i], ", count = ", count)
        i += 1
