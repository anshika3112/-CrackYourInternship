function printDuplicates(str) {
    let len = str.length;
    
    // Sorting the string
    str = str.split('').sort().join('');
    
    // Loop through the sorted string to find duplicates
    for(let i = 0; i < len; i++) {
        let count = 1;
        
        // Counting the occurrences of each character
        while(i < len-1 && str[i] == str[i+1]) {
            count++;
            i++;
        }
        
        // Printing the duplicate character and its count
        if(count > 1) {
            console.log(str[i] + ", count = " + count);
        }
    }
}
