class Solution(object):
    def removeDuplicates(self, nums):
        i = 0
        j = 0
        n = len(nums)
        while i < n:
            if nums[i] == nums[j]:
                i += 1
            else:
                j += 1
                nums[j] = nums[i]
        return j + 1
