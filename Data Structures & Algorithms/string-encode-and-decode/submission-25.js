class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, cur) => {
            return acc + `${cur.length}#${cur}` ;
        },"");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('str: ',str)
        if(str.length === 0) return ''

        let i = 0;

        let counting = null;
        let isCounting = true;
        let cur = ''

        const output = [];

        while(i < str.length) {
            const s = str[i];
            console.log('s:' ,s)
            console.log('isCounting: ',isCounting)
            console.log('counting: ',counting)
            if(isCounting) {
                if(s === '#') {
                    counting = parseInt(cur);

                    if(counting === 0) {
                        output.push('')
                        counting = null
                    } else {
                        isCounting = false;
                    }
                    cur = '';
                } else {
                    cur += s;
                }
                console.log('cur:' ,cur)
            } else {
                cur += s;
                counting--;
                if(counting === 0) {
                    output.push(cur);
                    cur = '';
                    isCounting = true;
                    counting = null;
                }
                console.log('cur: ',cur)
            }
            console.log('-----')
            i++;
        }
        return output
    }
}
