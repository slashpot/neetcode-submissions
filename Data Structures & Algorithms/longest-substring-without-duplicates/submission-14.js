class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0, j = 0;
        let max = 0;
        const included = new Set();
        while( j < s.length) {
            const newChar = s[j];
            while(included.has(newChar)) {
                included.delete(s[i]);
                i++;
            }
            included.add(newChar);
            max = Math.max(max, included.size)
            j++
        }
        return max;
    }
}
