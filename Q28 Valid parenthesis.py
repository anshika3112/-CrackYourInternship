class Solution:
    def minSwaps(self, nums):
        k = sum(nums)
        n = len(nums)
        cnt = sum(nums[:k])
        mx = cnt
        for i in range(k, n + k):
            cnt += nums[i % n] - nums[(i - k + n) % n]
            mx = max(mx, cnt)
        return k - mx

# Example usage
solution = Solution()
print(solution.minSwaps([0, 1, 0, 1, 1, 0, 0]))  # Output: 1
