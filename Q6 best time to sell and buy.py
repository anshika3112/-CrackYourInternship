class Solution:
    def maxProfitFinder(self, prices, i, minPrice, maxProfit):
        if i == len(prices):
            return maxProfit
        if prices[i] < minPrice:
            minPrice = prices[i]
        tProfit = prices[i] - minPrice
        if tProfit > maxProfit:
            maxProfit = tProfit
        return self.maxProfitFinder(prices, i + 1, minPrice, maxProfit)

    def maxProfit(self, prices):
        minPrice = float('inf')
        maxProfit = float('-inf')
        return self.maxProfitFinder(prices, 0, minPrice, maxProfit)



