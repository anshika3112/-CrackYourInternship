
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Copy elements from nums2 to the end of nums1
        for (int j = 0, i = m; j < n; j++) {
            nums1[i] = nums2[j];
            i++;
        }
        // Sort the merged array
        Arrays.sort(nums1);
    }
}

