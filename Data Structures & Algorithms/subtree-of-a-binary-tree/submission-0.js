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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const stack = [root];
        while(stack.length > 0) {
            const cur = stack.pop();
            if(this.isSameTree(cur, subRoot))
             return true;
            if(cur.left)
            stack.push(cur.left);
            if(cur.right)
            stack.push(cur.right);
        }
        return false;
    }
    isSameTree(a, b) {
        const stack = [[a,b]];
        while(stack.length > 0) {
            const [curA, curB] = stack.pop();
            if(!curA && !curB) continue;
            if(curA === null || curB === null) return false;
            if(curA.val !== curB.val) return false;
            stack.push([curA.left, curB.left])
            stack.push([curA.right, curB.right])
        }
        return true;
    }
}
