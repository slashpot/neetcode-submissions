class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0, j = 0;
        let output = 0;
        let countMap = new Map();

        while (j < s.length) {
            console.log('i: ',i)
            console.log('j: ',j)

            const char = s[j];

            if (countMap.has(char)) {
                countMap.set(char, countMap.get(char) + 1);
            } else {
                countMap.set(char, 1);
            }

            console.log('countMap: ',countMap);

            const strLength = j - i + 1;
            const maxCount = Math.max(...countMap.values());
            if (strLength - maxCount <= k) {
                output = Math.max(strLength, output);
            } else {
                //shrink window
                while ((j - i + 1) - Math.max(...countMap.values()) > k) {
                    const iChar = s[i];
                    const iCharCount = countMap.get(iChar);
                    if(iCharCount && iCharCount > 1) {
                        countMap.set(iChar, iCharCount-1);
                    }  else {
                        countMap.delete(iChar)
                    }
                    console.log('new CountMap: ', countMap)
                    i++;
                    console.log('new i: ',i)
                }
            }
                j++;

        }

        return output;
    }
}
