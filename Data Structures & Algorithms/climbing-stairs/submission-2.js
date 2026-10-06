class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n === 1) return 1;
        if(n === 2) return 2;
        let first = 1, second = 2;
        let index = 3;
        while(index <= n) {
            let temp = second;
            second = first + second;
            first = temp;
            if(index === n) break;
            index++;
        }
        return second;
    }
}
