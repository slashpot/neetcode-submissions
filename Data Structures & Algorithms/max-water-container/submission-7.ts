class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0, r = heights.length-1;
        let max = 0;

        while(l < r) {
            const lHeight = heights[l], rHeight = heights[r];
            const area = (r - l) * Math.min(lHeight, rHeight);
            if(area > max) {
                max = area;
            }
            if (lHeight >= rHeight) r--;
            else l++;
        }

        return max;
    }
}
