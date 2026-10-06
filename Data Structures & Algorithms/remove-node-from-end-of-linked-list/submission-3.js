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
        let length = 0;
        let cur = head;
        //calculate list size
        while(cur !== null) {
            length++;
            cur = cur.next;
        }

        console.log('length: ', length)

        //calculate removed index
        const removedIndex = length - n;
        console.log('removedIndex: ', removedIndex)

        let currentIndex = 0;

        cur = head;
        let prev = null;

        while(currentIndex < removedIndex) {
            prev = cur;
            cur = cur.next;
            currentIndex++;
        }

        //currentIndex === removedIndex
        if(prev === null) return length === 1 ? null : cur.next;
        prev.next = cur.next;

        return head;
    }
}
