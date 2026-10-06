class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length-1;

        while(l <= r) {
            const mid = Math.ceil((r + l) / 2);
            
            if(nums[mid] === target) {
                return mid;
            }

            //mid in left portion
            if(nums[l] <= nums[mid]) {
                if(target < nums[l] || target > nums[mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if(target > nums[r] || target < nums[mid]) {
                    r = mid-1;
                } else {
                    l = mid+1;
                }
            }
        }

        return -1
    }
}
