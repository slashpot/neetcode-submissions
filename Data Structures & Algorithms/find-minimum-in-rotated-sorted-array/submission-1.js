class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length-1;
        while(l < r && nums[l] > nums[r]) {
            const mid = Math.floor((l + r) / 2)
            console.log(`${l}:${nums[l]}`)
            console.log(`${r}:${nums[r]}`)
            console.log(`${mid}:${nums[mid]}`)
            if(mid === l) return nums[r];
            if(nums[mid] > nums[l]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return nums[l];
    }
}
