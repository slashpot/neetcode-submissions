class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0]
        if(nums.length === 2) return Math.max(nums[0],nums[1])
        return Math.max(this.rob1(nums.slice(0, nums.length-1)),this.rob1(nums.slice(1)))
    }

    rob1(nums) {
        let rob1 = 0, rob2 = 0;
        for(let n of nums) {
            const temp = Math.max(rob1+n, rob2)
            rob1 = rob2;
            rob2 = temp
        }
        return rob2;
    }
}
