class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length-1;
        while(nums[l] > nums[r]) {
            const m = Math.ceil((l + r)/2);
            const valm = nums[m]
            if(m === r) return valm;
            if(valm > nums[l]) {
                l = m + 1;
            } else if (valm < nums[r]) {
                r = m;
            }
        }
        return nums[l];
    }
}
