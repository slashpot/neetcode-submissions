class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const tracedSet = new Set();
        
        function dfs(i, j, idx) {
            if(
                i < 0 ||
                i >= board.length || 
                j < 0 || 
                j >= board[i].length ||
                word[idx] !== board[i][j] ||
                tracedSet.has(`${i}%${j}`)
                ) {
                return false;
            }

            if(idx === word.length - 1) return true;
            else {
                tracedSet.add(`${i}%${j}`)
                const res = (
                    dfs(i+1, j, idx+1) ||
                    dfs(i, j+1, idx+1) ||
                    dfs(i-1, j, idx+1) ||
                    dfs(i, j-1, idx+1)
                )
                tracedSet.delete(`${i}%${j}`)
                return res;
            }
        }

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(dfs(i,j,0)) return true;
            }
        }

        return false;
    }
}
