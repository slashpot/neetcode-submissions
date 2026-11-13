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
        let l = dummy, r = head;
        let diff = 1;
        while(diff < n) {
            r = r.next;
            diff++;
        }
        while(r.next) {
            l = l.next;
            r = r.next;
        }
        l.next = l.next.next;
        return dummy.next;
    }
}
