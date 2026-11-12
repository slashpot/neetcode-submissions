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
     * @return {void}
     */
    reorderList(head) {
        //slow, fast find two list
        let slow = head;
        let fast = head.next;
        while (slow.next && fast.next) {
            slow = slow.next;
            fast = fast.next;
            if (fast.next) {
                fast = fast.next;
            }
        }
        //reverse second half
        let prev = null,
            cur = slow.next;
        slow.next = null;

        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        //merge two lists
        let h1 = head, h2 = fast;
        let direction = true;
        while(h1 && h2) {
            if(direction) {
                const temp = h1.next;
                h1.next = h2
                h1 = temp;
            } else {
                const temp = h2.next;
                h2.next = h1;
                h2 = temp
            }
            direction = !direction;
        }

        return head;
    }
}