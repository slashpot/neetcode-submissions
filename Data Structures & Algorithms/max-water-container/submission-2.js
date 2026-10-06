class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let max = j * Math.min(heights[i], heights[j])

        while (i < j) {
            const heightI = heights[i], heightJ = heights[j]
            if (heightI < heightJ) {
                do {
                    i++;
                } while (heights[i] <= heightI && i < j)
                if (i >= j) break;

                const area = (j - i) * Math.min(heights[i], heights[j])
                if (area > max) max = area;
            } else {
                do {
                    j--;
                } while (heights[j] <= heightJ && i < j)
                if (i >= j) break;

                const area = (j - i) * Math.min(heights[i], heights[j])
                if (area > max) max = area;
            }
        }
        return max;
    }
}
