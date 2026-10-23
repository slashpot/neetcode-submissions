class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const leftSet = new Set(['(','{','['])
        const rightMap = new Map<string,string>([
            [')','('],
            ['}','{'],
            [']','['],
        ])

        for(const c of s) {
            console.log('c:',c)
            if(leftSet.has(c)) {
                stack.push(c)
            } else {
                const targetLeft = rightMap.get(c);
                const topLeft = stack.pop();
                if(targetLeft !== topLeft) return false;
            }
        }

        return stack.length === 0;
    }
}
