class Solution {
    public void maxProfitFinder(int[] prices, int i, int[] minPrice, int[] maxProfit) {
        if (i == prices.length) return;
        if (prices[i] < minPrice[0]) minPrice[0] = prices[i];
        int tProfit = prices[i] - minPrice[0];
        if (tProfit > maxProfit[0]) maxProfit[0] = tProfit;
        maxProfitFinder(prices, i + 1, minPrice, maxProfit);
    }

    public int maxProfit(int[] prices) {
        int[] minPrice = { Integer.MAX_VALUE };
        int[] maxProfit = { Integer.MIN_VALUE };
        maxProfitFinder(prices, 0, minPrice, maxProfit);
        return maxProfit[0];
    }

}

