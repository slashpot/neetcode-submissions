class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.reduce((acc,cur) => {
            return `${acc}${cur.length}#${cur}`
        },'')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // console.log('str: ',str)
        let index = 0;
        const result = [];
        let parsingLength = '';
        let currentLength : null | number = null;
        let parsingStr = '';
        while(index < str.length) {
            if(currentLength === null) {
                const char = str[index];
                if(char === '#') {
                    currentLength = parseInt(parsingLength);
                    if(currentLength === 0) {
                        result.push('')
                        currentLength = null;
                    }
                    parsingLength = ''            
                    index++;
                }
                //is number
                else if(isNaN(parseInt(char)) === false) {
                    parsingLength += char;
                    // console.log('parsingLength: ',parsingLength);
                    index++;
                }
            } else {
                const char = str[index];
                parsingStr += char;
                if(parsingStr.length !== currentLength) {
                    // console.log('parsingStr: ',parsingStr)
                    index++;
                } else {
                    result.push(parsingStr)
                    // console.log('push: ',parsingStr)
                    currentLength = null;
                    parsingStr = '';
                    index++;
                }
            }
        }
        return result;
    }
}
