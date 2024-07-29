
var merge = function(nums1, m, nums2, n) {
    for (let j = 0, i = m; j < n; j++) {
            nums1[i] = nums2[j];
            i++;
        }
        // Sort the merged array
        nums1.sort((a, b) => a - b);
};
