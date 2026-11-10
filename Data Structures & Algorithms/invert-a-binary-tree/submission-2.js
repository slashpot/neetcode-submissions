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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root) {
            let cur = root;
            const temp = cur.left;
            cur.left = cur.right;
            cur.right = temp;
            if (cur.left) {
                this.invertTree(cur.left);
            }
            if (cur.right) {
                this.invertTree(cur.right);
            }
        }
        return root;
    }
}
