class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums);
        let longest = 0;


        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            //check if it's smallest
            if(!numSet.has(num - 1)) {
                //it's smallest
                let bigger = num + 1;
                let length = 1;
                while(numSet.has(bigger)) {
                    length++;
                    bigger++;
                }
                if(length > longest)
                    longest = length;
            }
        }

        return longest;
    }
}
