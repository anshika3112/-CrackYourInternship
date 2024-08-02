var strStr = function(haystack, needle) {
    let n = haystack.length;
    if (n === 0 && needle === "") {
        return 0;
    }

    let m = needle.length;
    for (let i = 0; i <= n - m; i++) {
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
            if (j === m - 1) {
                return i;
            }
        }
    }
    return -1;
};


