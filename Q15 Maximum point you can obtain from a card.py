class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        ans = 0
        n = len(cardPoints)
        for i in range(k):
            ans += cardPoints[i]
        sum_val = ans
        for i in range(k):
            sum_val = sum_val - cardPoints[k - i - 1] + cardPoints[n - i - 1]
            ans = max(ans, sum_val)
        return ans
