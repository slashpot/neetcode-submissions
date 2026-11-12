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
     * @return {number[]}
     */
    inorderTraversal(root) {
        const stack = [];
        let cur = root;
        const result = [];
        while (cur || stack.length !== 0) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }
            //cur is null
            cur = stack.pop();
            result.push(cur.val);
            cur = cur.right;
        }
        return result;
    }
}
