class Solution:
    def majorityElement(self, nums):
        n = len(nums)
        key = nums[0]
        count = 0
        for i in range(n):
            if count == 0:
                key = nums[i]
            if nums[i] == key:
                count += 1
            else:
                count -= 1
        return key
