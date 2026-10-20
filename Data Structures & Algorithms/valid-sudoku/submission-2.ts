class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const map = new Map<string, string[]>();
        for(let i =0; i < board.length; i++) {
            for(let j=0; j < board.length; j++) {
                const str = board[i][j];
                if(str === '.') continue;

                const id = `${i}${j}${this.getBoxNumber(i,j)}`;
                const arr = map.get(str);
                if(!arr){
                    map.set(str, [id])
                } else {
                    for(const item of arr) {
                        if(this.isDuplicate(id, item)) return false;
                    }
                    arr.push(id);
                }
            }
        }
        return true;
    }

    getBoxNumber(i:number, j:number) : number {
       return Math.floor(i/3) * 3 + Math.floor(j/3);
    }
    isDuplicate(a: string, b: string) {
        for(let i =0; i < 3; i++) {
            if(a[i] === b[i]) return true;
        }
        return false;
    }
}
