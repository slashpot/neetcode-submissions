class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        function isAlphabet(c: string){
            const charCode = c.toLowerCase().charCodeAt(0)
            
            const zeroCharCode = '0'.charCodeAt(0);
            const nineCharCode = '9'.charCodeAt(0);
            if(charCode >= zeroCharCode && charCode <= nineCharCode) return true;

            const aCharCode = 'a'.charCodeAt(0)
            const zCharCode = 'z'.charCodeAt(0);
            if(charCode >= aCharCode && charCode <= zCharCode) return true;

            return false;
        }

        let begin = 0, end = s.length-1;
        let result = false;

        while(begin < end) {
            while(!isAlphabet(s[begin])) {
                begin++;
                if(begin >= s.length) return true;
            }

            while(!isAlphabet(s[end])) {
                end--;
                if(end < 0) return true;
            }

            if(s[begin].toLowerCase() !== s[end].toLowerCase()) return false;
            begin++;
            end--;
        }
        return true;
    }
}
