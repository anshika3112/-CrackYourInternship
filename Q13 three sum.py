class Solution:
    def threeSum(self, nums):
        target = 0
        nums.sort()
        unique_triplets = set()
        output = []

        for i in range(len(nums)):
            j = i + 1
            k = len(nums) - 1
            while j < k:
                sum_triplet = nums[i] + nums[j] + nums[k]
                if sum_triplet == target:
                    unique_triplets.add((nums[i], nums[j], nums[k]))
                    j += 1
                    k -= 1
                elif sum_triplet < target:
                    j += 1
                else:
                    k -= 1

        for triplet in unique_triplets:
            output.append(list(triplet))

        return output


