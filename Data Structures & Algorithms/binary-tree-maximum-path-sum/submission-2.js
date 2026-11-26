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
    maxPathSum(root) {
        let maxSum = -Infinity;

        function sum(node) {
            if (!node) return 0;
            const leftSum = Math.max(0, sum(node.left));
            const rightSum = Math.max(0, sum(node.right));

            maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

            return node.val + Math.max(leftSum, rightSum);
        }

        sum(root);
        return maxSum;
    }
}