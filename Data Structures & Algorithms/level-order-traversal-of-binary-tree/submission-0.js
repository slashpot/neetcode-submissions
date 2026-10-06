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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return [];

        const output = [];
        const queue = [root]

        while(queue.length !== 0) {
            const level = [];
            const length = queue.length;

            for(let i = 0; i < length; i++) {
                const cur = queue.shift();
                level.push(cur.val)

                if(cur.left) {
                    queue.push(cur.left)
                }

                if(cur.right) {
                    queue.push(cur.right)
                }
            }

            output.push(level)
        }

        return output;
    }
}
