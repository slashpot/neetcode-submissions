class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = Array.from({length: nums.length}, () => 1);

        for(let i = 0; i < nums.length-1; i++) {
            for(let j=i+1; j< nums.length; j++) {
                output[j] *= nums[i]
            }
        }

         for(let i = nums.length-1; i > 0; i--) {
            for(let j=i-1; j >= 0; j--) {
                output[j] *= nums[i]
            }
        }

        return output;
    }
}
