class MinStack {
    vals: number[]
    minStack: number[]
    constructor() {
        this.vals = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.vals.push(val);
        if(this.minStack.length === 0){
            this.minStack.push(val);
        } else {
            let min = this.getMin();
            if(val < min) min = val;
            this.minStack.push(min)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.vals.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.vals[this.vals.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length-1];
    }
}
