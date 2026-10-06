class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length
        for(let i = 0; i < Math.floor(n/2); i++) {
            for(let j = i; j < n - 1 - i; j++) {
                let x = i, y = j;
                console.log('start: ', `${x}_${y}`)
                let cur = matrix[x][y]

                 for(let k = 0; k < 4; k++) {
                    console.log('cur: ',cur)
                    const [nextX, nextY] = this.calculateXY(x, y, matrix.length);
                    const next = matrix[nextX][nextY];
                    matrix[nextX][nextY] = cur;
                    cur = next;
                    x = nextX;
                    y = nextY;
                    console.log('next: ', `${x}_${y}_${cur}`)
                }
            }
        }
    }
    calculateXY(x, y, n) {
        return [y, n-1-x]
    }
}
