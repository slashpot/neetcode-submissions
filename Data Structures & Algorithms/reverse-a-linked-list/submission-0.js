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
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null) return null;
        if( head.next === null) return head;

        let i = head.next, j = head.next.next;
        head.next = null

        do {
            i.next = head;
            head = i;
            if( j === null) return i;
            i = j;
            j = j.next
        } while(true)
    }
}
