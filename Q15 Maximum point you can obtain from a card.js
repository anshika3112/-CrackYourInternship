var maxScore = function(cardPoints, k) {
    let ans = 0;
    const n = cardPoints.length;
    for (let i = 0; i < k; i++) {
        ans += cardPoints[i];
    }
    let sum = ans;
    for (let i = 0; i < k; i++) {
        sum = sum - cardPoints[k - i - 1] + cardPoints[n - i - 1];
        ans = Math.max(ans, sum);
    }
    return ans;
};
