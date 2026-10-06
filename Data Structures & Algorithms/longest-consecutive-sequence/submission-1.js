class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */


    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        //create a set
        const set = new Set(nums);
        let max = 1;
        for(const n of nums) {
            //check each n is start of a sequence, if then find next and count
            if(!set.has(n-1)) {
                let count = 1;
                let next = n+1;
                while(set.has(next)) {
                    count++;
                    if(count > max) {
                        max = count;
                    }
                    next++;
                }
            }
            //if not start, skip
        }

        return max;
    }
}
