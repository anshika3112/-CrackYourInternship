class Solution:
    def fourSum(self, nums, target):
        nums.sort()
        ans = []
        n = len(nums)

        for a in range(n):
            for b in range(a + 1, n):
                c, d = b + 1, n - 1
                while c < d:
                    total = nums[a] + nums[b] + nums[c] + nums[d]
                    if total < target:
                        c += 1
                    elif total > target:
                        d -= 1
                    else:
                        quad = [nums[a], nums[b], nums[c], nums[d]]
                        if quad not in ans:
                            ans.append(quad)
                        c += 1
                        d -= 1
        return ans
