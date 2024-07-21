var maxProfit = function(prices) {
    function maxProfitFinder(prices, i, minPrice, maxProfit) {
        if (i === prices.length) {
            return maxProfit;
        }
        
        // Update minPrice and maxProfit
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        const tProfit = prices[i] - minPrice;
        if (tProfit > maxProfit) {
            maxProfit = tProfit;
        }
        
        // Recursive call to the next index
        return maxProfitFinder(prices, i + 1, minPrice, maxProfit);
    }
    const minPrice = Infinity;
    const maxProfit = 0;
    return maxProfitFinder(prices, 0, minPrice, maxProfit);
};



