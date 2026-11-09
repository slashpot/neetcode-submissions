class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length-1;
        while(nums[l] > nums[r]) {
            const m = Math.ceil((l + r)/2);
            if(m === r) return nums[m];
            if(nums[m] > nums[l]) {
                l = m + 1;
            } else if (nums[m] < nums[r]) {
                r = m;
            }
        }
        return nums[l];
    }
}
