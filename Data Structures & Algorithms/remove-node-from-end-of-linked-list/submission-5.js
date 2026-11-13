/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = {
            val: 0,
            next: head
        }
        //find total
        let total = 1;

        let cur = head;
        while(cur.next) {
            cur = cur.next;
            total++;
        }
        cur = head;

        const targetIndex = total-n;
        let prev = dummy, index = 0;
        while(index < targetIndex) {
            prev = cur;
            cur = cur.next;
            index++;
        }
        prev.next = cur.next;
        return dummy.next;
    }
}
