class Solution:
    def subarraySum(self, nums, k):
        n = len(nums)
        count = 0
        sum_val = 0
        mp = {0: 1}
        
        for i in range(n):
            sum_val += nums[i]
            remove = sum_val - k
            if remove in mp:
                count += mp[remove]
            if sum_val in mp:
                mp[sum_val] += 1
            else:
                mp[sum_val] = 1
        
        return count
