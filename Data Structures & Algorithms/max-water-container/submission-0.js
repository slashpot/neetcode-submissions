class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        for(let i = 0; i < heights.length; i++) {
            for(let j = i+ 1; j < heights.length; j++) {
                const width = j - i;
                const height = Math.min(heights[i], heights[j]);
                if(width * height > max ) max = width * height;
            }
        }
        return max;
    }
}
