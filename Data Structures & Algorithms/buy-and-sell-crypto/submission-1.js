class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1;
        let max = 0;

        while(r < prices.length) {
            const buy = prices[l];
            const sell = prices[r];
            if(buy >= sell) {
                l = r;
                r++;
            } else {
                const profit = sell - buy;
                if(profit > max) {
                    max = profit
                }
                r++;
            }
        }
        return max;
    }
}
