class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const output = strs.reduce((acc,cur)=>{
            return acc+`${cur.length}#${cur}`
        },"")
        console.log(output)
        return output
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
            let isParsing = true;
            let counting = 0;
            let b = ""

            while (isParsing) {
                if (str[i] === '#') {
                    isParsing = false;
                    counting = parseInt(b);
                    i++
                } else {
                    b += str[i]
                    i++;
                }            
            }
            console.log(counting)
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
