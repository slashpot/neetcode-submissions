class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a-b);
        const result = [];
        let index = 0;

        while( index < nums.length-2) {
            const val = nums[index];
            const target = 0 - val;
            let begin = index + 1, end = nums.length-1;

            function foward() {
                do {
                    begin++
                } while(nums[begin] === nums[begin-1] && begin < nums.length - 1)
            }
            function backward() {
                do {
                    end--
                } while(nums[end] === nums[end+1] && end > 0)
            }
            while(begin < end) {
                const sum = nums[begin] + nums[end];
                if(sum === target) {
                    result.push([val, nums[begin], nums[end]])
                    foward();
                    backward();
                } else if (sum < target) {
                    foward();
                } else {
                    backward();
                }
            }
            do {
                index++
            } while(nums[index] === nums[index-1] && index < nums.length - 1)
        }

        return result;
    }
}
