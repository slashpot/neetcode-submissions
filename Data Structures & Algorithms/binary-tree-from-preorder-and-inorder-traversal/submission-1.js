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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preIndex = 0;
        const indices = inorder.reduce((acc, cur, index) => {
            acc.set(cur, index)
            return acc;
        }, new Map([]))
        
        function dfs(l , r) {
            if(l > r) return null;
            const root = new TreeNode(preorder[preIndex]);
            const mid = indices.get(preorder[preIndex]);
            preIndex++;
            root.left = dfs(l, mid-1)
            root.right = dfs(mid+1, r)
            return root;
        }

        return dfs(0, inorder.length-1)
    }
}
