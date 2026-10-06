class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            '[': ']',
            '(': ')',
            '{': '}'
        }
        const stack = [];

        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            if(map[char] !== undefined) {
                stack.push(map[char])
            } else {
                if(char === stack[stack.length-1]) {
                    stack.pop();
                } else return false;
            }
        }

        return stack.length === 0;
    }
}
