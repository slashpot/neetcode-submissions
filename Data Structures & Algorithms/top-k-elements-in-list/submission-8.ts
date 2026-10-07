class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //create nums freq map
        const freqMap = new Map<number, number>();

        nums.forEach(x => {
            const freq = freqMap.get(x);
            if(freq !== undefined) {
                freqMap.set(x, freq+1);
            }else {
              freqMap.set(x,1);
            }
        })

        
        //create freq bucket
        let freqBucket = [];
        for(const e of freqMap.entries()) {
            if(!freqBucket[e[1]]) {
                freqBucket[e[1]] = [e[0]];
            } else {
                freqBucket[e[1]].push(e[0]);
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
