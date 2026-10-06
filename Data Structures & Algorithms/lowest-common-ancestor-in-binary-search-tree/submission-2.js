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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {

        const parentSet = new Set([root]);
        let current = root;

        while(current.val !== p.val) {
            current = current.val > p.val ?
                current.left :
                current.right;

            parentSet.add(current);
        }

        current = root;
        let targetParent = root;
        while(current.val !== q.val) {

            current = current.val > q.val ?
                current.left :
                current.right;

            if(parentSet.has(current)) {
                targetParent = current;
            } else {
                break;
            }
        }
        return targetParent
    }
}
