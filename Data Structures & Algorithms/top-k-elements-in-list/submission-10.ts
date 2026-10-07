class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //create nums freq map
        const freqMap = nums.reduce((freqMap,num) => {
            const freq = freqMap.get(num);
            freqMap.set(num, freqMap.get(num) ? freq + 1 : 1);
            return freqMap;
        }, new Map<number, number>);

        //create freq bucket
        let freqBucket = [];
        for(const [num, freq] of freqMap.entries()) {
            if(freqBucket[freq]) {
                freqBucket[freq].push(num);
            } else {
                freqBucket[freq] = [num];
            }
        }

        let result = [];
        for(let i = freqBucket.length-1; i >=0; i--) {
            while(freqBucket[i] && freqBucket[i].length > 0) {
                const r = freqBucket[i].pop();
                result.push(r);
                if(result.length === k) return result;
            }
        }

        return result;
    }
}
