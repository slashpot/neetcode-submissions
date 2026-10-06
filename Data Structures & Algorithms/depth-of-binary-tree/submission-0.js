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
        if (root === null) return 0;

        const q = [root]
        let depth = 0;

        while (q.length !== 0) {
            const size = q.length;
            for (let i = 0; i < size; i++) {
                const cur = q.shift();
                if (cur.left) q.push(cur.left)
                if (cur.right) q.push(cur.right)
            }
            depth++;
        }

        return depth
    }
}
