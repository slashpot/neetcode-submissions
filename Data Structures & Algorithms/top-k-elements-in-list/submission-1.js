class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(const n of nums) {
            if(map[n]) map[n]++
            else map[n] = 1
        }

        const countArr = Array.from({length: nums.length} , () =>[]);
        for(const n in map) {
            countArr[map[n]-1].push(parseInt(n))
        }

        const res = [];
        for(let i = countArr.length-1; i>=0; i--) {
            const group = countArr[i];
            for(const n of group) {
                res.push(n)
                if(res.length === k) {
                    return res
                }
            }
        }

    }
}
