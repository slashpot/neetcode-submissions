class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const symbolMap = new Map<string,string>([
            ['(',')'],
            ['{','}'],
            ['[',']']
        ])

        for(const c of s) {
            if(symbolMap.has(c)) {
                stack.push(symbolMap.get(c))
            } else {
                const topRight = stack.pop();
                if(topRight !== c) return false;
            }
        }

        return stack.length === 0;
    }
}
