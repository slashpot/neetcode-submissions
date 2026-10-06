class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const traced = matrix.map(row => row.map(() => false));
        let row = 0, col = 0;
        // traced[row][col] = true;
        // const output = [matrix[row][col]];
        const output = [];
        const total = matrix.length * matrix[0].length;

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
            output.push(matrix[row][col]);
            traced[row][col] = true;
            if(output.length === total)
                return output

            let curDirection = directions[directionIndex];
            let nextRow = row + curDirection.i;
            let nextCol = col + curDirection.j;

            while((nextRow > matrix.length -1 || nextRow < 0) || (nextCol > matrix[0].length-1 || nextCol < 0) || (traced[nextRow][nextCol]) ) {
                changeDirection();
                curDirection = directions[directionIndex];
                nextRow = row + curDirection.i;
                nextCol = col + curDirection.j;
            } 
        
            row = nextRow;
            col = nextCol
        }

        function changeDirection() {
            directionIndex++;
            if(directionIndex === directions.length)
                directionIndex = 0;
        }
    }
}
