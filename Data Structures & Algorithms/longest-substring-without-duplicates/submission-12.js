class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        
        let i = 0, j = 0;
        let max = 0;
        let included = new Set();

        while (j < s.length) {
            const newChar = s[j];
            
            // If the character is already in the set, remove characters from the left
            // until this duplicate character is removed
            while (included.has(newChar)) {
                included.delete(s[i]);
                i++;
            }
            
            // Add the new character to the set
            included.add(newChar);
            
            // Update max length
            max = Math.max(max, included.size);
            
            j++;
        }

        return max;
    }
}