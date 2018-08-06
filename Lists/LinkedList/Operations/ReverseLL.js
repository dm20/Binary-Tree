/*
Reverse a singly linked list.
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

var reverseList = function(head) {
    if (head == null) {
    	return null
    }
    if (head.next == null) {
        return head
    }
    return reverse(head)
};

function reverse(node) {
	let newHead;
	let n = null
	while (node != null) {
		newHead = new ListNode(node.val)
		newHead.next = n
		n = newHead
		node = node.next
	}
	return newHead
}
