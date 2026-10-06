class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let head = 0, tail = s.length-1;
        while(head < tail) {
            let h = null;
            let t = null;
            while(h === null) {
                h = this.getChar(s[head])
                head++;
                if(head >= s.length) break;
            }
            while(t === null) {
                t = this.getChar(s[tail])
                tail--
                if(tail < 0) break;
            }
            if(t !== h) return false;
        }
        return true;
    }
    getChar(c) {
        const lower = c.toLowerCase();
        if(
            (lower.charCodeAt(0) >= 'a'.charCodeAt(0) && lower.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
            (lower.charCodeAt(0) >= '0'.charCodeAt(0) && lower.charCodeAt(0) <= '9'.charCodeAt(0)) 
        ){
            return lower;
        }
        return null;
    }
}
