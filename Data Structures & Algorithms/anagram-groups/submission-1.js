class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const output = {}
         for(const str of strs) {
            const key = this.getKey(str)
            if(output[key] === undefined) {
                output[key] = [str]
            } else {
                output[key].push(str)
            }
         }
         return Object.values(output);
    }
    getKey(str) {
        const arr = Array(26).fill(0);
        for(const c of str ) {
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return arr.join('#')
    }
}
