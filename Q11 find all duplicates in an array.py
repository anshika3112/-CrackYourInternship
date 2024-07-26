class Solution(object):
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        nums.sort()
        my_list = []
        for i in range (len(nums)-1):
            if(nums[i]==nums[i+1]):
              my_list.append(nums[i])
        return my_list     

        
