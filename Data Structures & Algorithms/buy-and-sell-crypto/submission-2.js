class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = prices[0];
        let max = 0;
        for(let p of prices) {
            if(p < l) {
                l = p;
            } else {
                max = Math.max(max, p - l)
            }
        }
        return max;
    }
}
