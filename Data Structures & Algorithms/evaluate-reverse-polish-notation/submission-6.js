class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(const t of tokens) {
            if(this.isOperand(t)){
                const first = stack.pop();
                const second = stack.pop();
                stack.push(this.operate(second,first, t));
            } else {
                stack.push(parseInt(t));
            }
        }
        return stack.pop();
    }
    isOperand(t) {
        return t === '+' || t === '-' || t==='*' || t==='/';
    }
    operate(a,b,operator){
        if(operator === '+') {
            return a + b
        } else if(operator === '-') {
            return a - b;
        } else if(operator === '*') {
            return a * b;
        } else if (operator === '/') {
            return Math.trunc(a / b);
        }
    }
}
