class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //find smallest bundary
        let l = 0,
            r = nums.length - 1;
        while (nums[l] > nums[r]) {
            const m = Math.ceil((l + r) / 2);
            if (nums[m] < nums[r]) {
                r = m;
            } else {
                l = m;
            }
        }
        const smallest = l;
        function binarySearch(l2, r2) {
            while (l2 <= r2) {
                const mid = Math.ceil((l2 + r2) / 2);
                if (target === nums[mid]) {
                    return mid;
                } else if (target > nums[mid]) {
                    l2 = mid + 1;
                } else {
                    r2 = mid - 1;
                }
            }
            return -1;
        }
        if (target >= nums[smallest] && target <= nums[nums.length-1]) {
            return binarySearch(smallest, nums.length - 1);
        } else {
            return binarySearch(0, smallest - 1);
        }
    }
}
