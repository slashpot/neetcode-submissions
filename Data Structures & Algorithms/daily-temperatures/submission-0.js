class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = Array(temperatures.length).fill(0);
        const stack = [];
        temperatures.forEach((item, index) => {
            while(stack.length > 0 && stack[stack.length-1][0] < item){
                const [,prevIndex] = stack.pop();
                const indexDiff = index - prevIndex;
                result[prevIndex] = indexDiff;
            }
            stack.push([item, index]);
        })
        return result;
    }
}
