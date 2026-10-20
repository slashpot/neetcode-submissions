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
       if(i>=0 && i <= 2) {
        if(j>=0 && j <= 2) return 1;
        if(j>=3 && j <= 5) return 2;
        if(j>=6 && j <= 8) return 3;
       } 
       if(i>=3 && i <= 5) {
        if(j>=0 && j <= 2) return 4;
        if(j>=3 && j <= 5) return 5;
        if(j>=6 && j <= 8) return 6;
       } 
       if(i>=6 && i <= 8) {
        if(j>=0 && j <= 2) return 7;
        if(j>=3 && j <= 5) return 8;
        if(j>=6 && j <= 8) return 9;
       } 
       return -1;
    }
    isDuplicate(a: string, b: string) {
        for(let i =0; i < 3; i++) {
            if(a[i] === b[i]) return true;
        }
        return false;
    }
}
