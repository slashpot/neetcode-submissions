class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [1];
        let prefix = nums[0];

        for(let i = 1; i < nums.length; i++) {
            output.push(prefix);
            prefix *= nums[i];   
        }

        console.log(output)

        let postfix = nums[nums.length-1];
        for(let i = nums.length-2; i >= 0; i--) {
            output[i] *= postfix;
            postfix*= nums[i]
        }

        return output;
    }
}
