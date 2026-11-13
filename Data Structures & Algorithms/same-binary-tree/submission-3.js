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
        const pqueue = [p];
        const qqueue = [q];
        while (pqueue.length > 0 && qqueue.length > 0) {
            const pLength = pqueue.length;
            for (let i = 0; i < pLength; i++) {
                const pcur = pqueue.shift(),
                    qcur = qqueue.shift();
                if (pcur === null && qcur === null) continue;
                if (pcur === null || qcur === null || pcur.val !== qcur.val) return false;
                pqueue.push(pcur.left);
                pqueue.push(pcur.right);
                qqueue.push(qcur.left);
                qqueue.push(qcur.right);
            }
        }
        return true;
    }
}
