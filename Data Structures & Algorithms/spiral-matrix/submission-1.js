class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const traced = matrix.map(row => row.map(() => false));
        let row = 0, col = 0;
        traced[row][col] = true;
        const output = [matrix[row][col]];
        
        const total = matrix.length * matrix[0].length;
        if(total === 1) return output

        const directions = [
            {
                i: 0,
                j: 1
            },
            {
                i: 1,
                j: 0
            },{
                i: 0,
                j: -1
            }, {
                i: -1,
                j: 0
            }
        ]
        let directionIndex = 0;

        while(true) {
            const curDirection = directions[directionIndex];
            const nextRow = row + curDirection.i;
            const nextCol = col + curDirection.j;
            if(nextRow > matrix.length -1 || nextRow < 0) {
                changeDirection();
            } else if (nextCol > matrix[0].length-1 || nextCol < 0) {
                changeDirection();
            } else if(traced[nextRow][nextCol]) {
                changeDirection();
            } else {
                output.push(matrix[nextRow][nextCol]);
                if(output.length === matrix.length * matrix[0].length)
                    return output
                traced[nextRow][nextCol] = true;
                row = nextRow;
                col = nextCol
            }
        }


        function changeDirection() {
            directionIndex++;
            if(directionIndex === directions.length)
                directionIndex = 0;
        }
    }
}
