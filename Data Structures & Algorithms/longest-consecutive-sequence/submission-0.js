class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        nums.sort((a,b) => a-b);

        let pre = null;
        let count = 1;
        let max = 1;

        for(const n of nums) {
            if(pre !== null){
                if(n === pre + 1) {
                    count++;
                    if(count > max) max = count;
                } else if(n !== pre) {
                    count = 1;
                }
            }
            pre = n
        }

        return max;
    }
}
