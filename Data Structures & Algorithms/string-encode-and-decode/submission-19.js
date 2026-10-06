class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc,cur)=>{
            return acc+`${cur.length}#${cur}`
        },"")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return []
        const output = [];
        let i=0;

        while(i<str.length) {
            let b = ""

            while (str[i] !== '#') {
                b += str[i]
                i++;       
            }

            let counting = parseInt(b)
            i++;
            let cur = "";

            while(counting > 0) {
                counting--;
                cur += str[i]
                i++;
            }
            output.push(cur);

        }

        return output;
    }
}
