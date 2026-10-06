class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = {}
        for(const str of strs) {
            const key = this.toKey(str);
            if(output[key]) output[key].push(str);
            else output[key] = [str];
        }
        return Object.values(output);
    }
    toKey(str) {
        const charArr = new Array(26).fill(0);
        for(let i = 0; i < str.length; i++) {
            const c = str[i];
            charArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        return charArr.join('#');
    }

}
