class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        nums.sort((a,b) => a - b);

        function backtrack(index, sum, path) {
            if(sum === target) {
                result.push(path)
                return;
            }
            for(let i = index; i < nums.length; i++) {
                const n = nums[i];
                if(sum + n > target) return;
                backtrack(i, sum+n, [...path, n])
            }
        }

        backtrack(0, 0, [])
        return result;
    }
}
