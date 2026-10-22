class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let begin = 0, end = numbers.length-1;
        while(begin < end) {
            const sum = numbers[begin] + numbers[end];
            if(sum === target) break;
            else if (sum < target) begin++;
            else end--;
        }
        return [begin+1, end+1];
    }
}
