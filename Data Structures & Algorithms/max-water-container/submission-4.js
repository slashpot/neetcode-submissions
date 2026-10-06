class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;

        function calculateCurrentArea() {
            return (j - i) * Math.min(heights[i], heights[j])
        }

        let max = calculateCurrentArea();

        while (i < j) {
            const heightI = heights[i], heightJ = heights[j]
            if (heightI < heightJ) {
                do {
                    i++;
                } while (heights[i] <= heightI && i < j)
            } else {
                do {
                    j--;
                } while (heights[j] <= heightJ && i < j)
            }
            if (i >= j) break;

            const area = calculateCurrentArea();
            if (area > max) max = area;
        }
        return max;
    }
}
