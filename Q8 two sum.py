class Solution:
    def twoSum(self, nums, target):
        # Initialize a dictionary to store the complement and its index
        complement_map = {}

        # Traverse the list using indices
        for i in range(len(nums)):
            num = nums[i]
            complement = target - num
            if complement in complement_map:
                # If the complement is found in the map, return the indices
                return [complement_map[complement], i]
            # Otherwise, add the number and its index to the map
            complement_map[num] = i

        # Return an empty list if no pair is found
        return []
