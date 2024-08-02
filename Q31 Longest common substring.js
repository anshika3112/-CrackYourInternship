var longestCommonPrefix = function(arr) {
    if (!arr || arr.length === 0) {
        return "";
    }

    arr.sort();
    let a = arr[0];
    let b = arr[arr.length - 1];
    let i = 0;
    let ans = "";

    while (i < a.length) {
        if (a[i] === b[i]) {
            ans += a[i];
            i++;
        } else {
            break;
        }
    }

    return ans;
};


