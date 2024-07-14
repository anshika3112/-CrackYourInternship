class Solution(object):
    def sortColors(self, nums):
      n=len(nums) 
      right=n-1
      index,left=0,0
      while(index<=right):
        if(nums[index]==0):
          temp=nums[index]
          nums[index]=nums[left]
          nums[left]=temp
          left=left+1
          index=index+1
        elif nums[index]==2:
            temp=nums[index]
            nums[index]=nums[right]
            nums[right]=temp
            right=right-1
        else:
         index=index+1
        
