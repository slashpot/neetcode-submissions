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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let cur = root;
        let count = 0;
        const stack = [];
        while(cur !== null || stack.length > 0) {
            while(cur) {
                stack.push(cur)
                cur = cur.left;
            }
            cur = stack.pop();
            count++;
            if(count === k) return cur.val;
            cur = cur.right;
        }
        return null;
    }
}
