class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for(let str of strs) {
            const key = str.split('').sort().join();
            if(groups.has(key)) {
                const arr = groups.get(key)
                arr.push(str)
                groups.set(key, arr)
            } else {
                groups.set(key, [str])
            }
        }
        console.log(groups)
        return Array.from(groups.values())
    }
}
