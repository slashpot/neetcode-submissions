class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const asciiMap = new Map<string, string[]>();
        
        for(const s of strs) {
            const asciiArr = Array.from({length: 26}, () => 0);
            for(let i = 0; i < s.length; i++ ) {
                asciiArr[s.charCodeAt(i)-97]++;
            }
            const key = asciiArr.join(',');
            const group = asciiMap.get(key);
            if(group) {
                group.push(s);
            }
            else {
                asciiMap.set(key, [s]);
            }
        }

        const result = []
        for(const val of asciiMap.values()) {
            result.push(val);
        }
        return result;
    }
}
