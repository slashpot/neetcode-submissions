class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {};

        for(const s of strs) {
            const asciiArr = Array.from({length: 26}, () => 0);
            for(let i = 0; i < s.length; i++ ) {
                asciiArr[s.charCodeAt(i)-97]++;
            }
            const key = asciiArr.join(',');
            const group = res[key];
            if(group) {
                group.push(s);
            }
            else {
                res[key] = [s];
            }
        }
        return Object.values(res);
    }
}
