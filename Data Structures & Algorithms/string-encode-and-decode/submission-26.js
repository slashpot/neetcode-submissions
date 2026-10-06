class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc,cur) => {
            return `${acc}${cur.length}#${cur}`
        },'')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('str:' ,str)
        let isCounting = true;
        let cur = '';
        let wordLength = null
        const output = [];

        for(let i = 0; i < str.length; i++) {
            const s = str[i]
            if(isCounting) {
                if(s === '#') {
                    if(cur === '0') output.push('')
                    else {
                        wordLength = parseInt(cur);
                        isCounting = false;
                    }
                    cur = '';
                } else {
                    cur = cur + s;
                }
            } else {
                cur = cur + s;
                if(cur.length === wordLength) {
                    output.push(cur);
                    cur = ''
                    isCounting = true;
                    wordLength = null
                }
            }
        }

        return output;
    }
}
