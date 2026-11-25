class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if( n <= 2) return n;
        let prev1 = 1;
        let prev2 = 2;
        for(let i = 3; i <= n; i++) {
            const next = prev1 + prev2;
            prev1 = prev2;
            prev2 = next;
        }
        return prev2
    }
}
