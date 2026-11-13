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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack = [[p, q]];
        while(stack.length > 0) {
            const [pcur,qcur] = stack.pop();
            if(pcur === null && qcur === null ) continue;
            if(pcur === null || qcur === null || pcur.val !== qcur.val) return false;
            stack.push([pcur.left, qcur.left])
            stack.push([pcur.right, qcur.right]);
        }
        return true;
    }
}
