class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}

        for(let n of nums) {
            if(map[n]) map[n]++
            else map[n] = 1
        }

        const bucket = Array.from({length: nums.length}, () => [])
        const vals = Object.keys(map)
        const output = [];

        for(let key of vals) {
            const count = map[key]
            bucket[count-1].push(key)
        }

        for(let i = bucket.length-1; i >= 0; i--) {
            const arr = bucket[i]
            for(let i = arr.length-1; i >= 0; i--) {
                output.push(arr[i])
                if(output.length === k) return output
            }
        }
    }
}
