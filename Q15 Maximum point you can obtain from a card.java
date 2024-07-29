class Solution {
    public int maxScore(int[] cardPoints, int k) {
        int ans = 0;
        int n = cardPoints.length;
        for (int i = 0; i < k; i++) {
            ans += cardPoints[i];
        }
        int sum = ans;
        for (int i = 0; i < k; i++) {
            sum = sum - cardPoints[k - i - 1] + cardPoints[n - i - 1];
            ans = Math.max(ans, sum);
        }
        return ans;
    }
}
