class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let tempSum = 1;
        const prefixArr = [1];
        for(let i = 1; i < nums.length; i++) {
            tempSum *= nums[i-1]
            prefixArr.push(tempSum)
        }        
        console.log('prefix: ',prefixArr);
        const suffixArr = [1];
        tempSum=1;
        for(let i = nums.length-2; i >= 0 ; i--) {
                tempSum *= nums[i+1]
                suffixArr.unshift(tempSum)
        }   
        console.log('suffix: ',suffixArr);
        return prefixArr.map((item, index) => item * suffixArr[index])
    }
}
