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

        const bucket = Array.from({length: nums.length+1}, () => []);
        const keys = Object.keys(map);
        
        for(const k of keys) {
            bucket[map[k]].push(k);
        }

        const output = []
        for(let i = bucket.length-1; i > 0; i--) {
            const arr = bucket[i]
            for(const n of arr) {
                output.push(n)
                if(output.length === k) return output;
            }
        }
    }
}
