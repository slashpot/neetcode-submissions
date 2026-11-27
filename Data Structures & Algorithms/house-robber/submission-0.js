class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
        if (nums.length === 3) return Math.max(nums[0] + nums[2], nums[1]);

        let ansMap = new Map([
            [nums.length - 1, nums[nums.length - 1]],
            [nums.length - 2, Math.max(nums[nums.length - 1], nums[nums.length - 2])],
            [nums.length - 3, Math.max(nums[nums.length-1] + nums[nums.length-3], nums[nums.length-2])],
        ]);

        let max = Math.max(
            nums[nums.length - 1],
            Math.max(nums[nums.length - 1], nums[nums.length - 2]),
            Math.max(nums[nums.length-1] + nums[nums.length-3], nums[nums.length-2]),
        );

        let i = nums.length - 4;
        while (i >= 0) {
            const ans = nums[i] + Math.max(ansMap.get(i + 2), ansMap.get(i + 3));
            if(ans > max) max = ans;
            ansMap.set(i, ans)
            i--;
            console.log('ansMap:',ansMap)
        }

        return max;
    }
}
