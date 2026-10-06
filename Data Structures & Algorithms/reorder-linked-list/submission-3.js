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
        if(head.next === null) return head;
        //use slow, fast pointer to seperate two lists.
        let slow = head, fast = head.next;
        
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //reverse second list
        let second = slow.next, prev = null;
        slow.next = null
        while(second !== null) {
            const temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        console.log('after while')

        let first = head;
        second = prev;

        while(second !== null & first !== null) {
            let temp = first.next;
            first.next = second;
            first = temp;

            temp = second.next;
            second.next = first;
            second = temp;
        }
    }
}
