/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0;
        const queue = [root];
        let max = 0;
        let level = 0;
        while(queue.length !== 0) {
            level++;
            if(level > max) max = level;
            const size = queue.length;
            for(let i = 0; i < size; i++) {
                const cur = queue.shift();
                if(cur.left) {
                    queue.push(cur.left);
                }
                if(cur.right) {
                    queue.push(cur.right);
                }
            }
        }
        return max;
    }
}
