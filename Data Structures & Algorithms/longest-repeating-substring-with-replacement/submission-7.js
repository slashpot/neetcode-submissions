class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let maxf = 0;
        let res = 0;
        const map = new Map();

        for(let r = 0; r < s.length; r++) {
            const freq = ( map.get(s[r]) || 0 ) + 1;
            map.set(s[r], freq);
            maxf = Math.max(maxf, freq);
            if(((r - l) + 1 - maxf) > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
