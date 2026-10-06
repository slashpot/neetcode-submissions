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
        // pop p stack and check if has value in q set, if then return

        const parentSet = new Set([root]);
        let current = root;
        console.log('p: ', p.val)
        // search p and create set of parent
        while(current.val !== p.val) {
            console.log('current: ', current.val)

            if(current.val > p.val){
                current = current.left;
            } else {
                current = current.right;
            }
            parentSet.add(current);
        }

        // search q check parent set, if set does not node, then return previous node 
        current = root;
        let targetParent = root;
        while(current.val !== q.val) {
            if(current.val > q.val) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(parentSet.has(current)) {
                targetParent = current;
            } else {
                break;
            }
        }
        return targetParent
    }
}
