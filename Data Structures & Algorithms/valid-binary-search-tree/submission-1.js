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
     * @return {boolean}
     */
    isValidBST(root) {
        let cur = root;
        const stack = [];
        let val = null;
        while (!!cur || stack.length > 0) {
            while (cur) {
                stack.push(cur)
                cur = cur.left;
            }
            cur = stack.pop();
            if(val === null || val < cur.val)
                val = cur.val;
            else return false;
            cur = cur.right;
        }
        return true;
    }
}
