class Solution:
    def merge(self, nums1, m, nums2, n):
        # Copy elements from nums2 to the end of nums1
        for j in range(n):
            nums1[m + j] = nums2[j]
        # Sort the merged array
        nums1.sort()

