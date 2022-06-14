/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd1 = function (head, k) {

    if (head) {
        var index = getKthFromEnd(head.next, k)
        console.log(index)
    } else {
        return 0
    }
    if (index instanceof ListNode) {
        return index
    }
    if (index === k - 1) {
        return head
    }
    return index + 1
};
var getKthFromEnd2 = function (head, k) {
    if(!head || !k){
        return null
    }
    let i =  0
    let firstNode = secondNode = head
    while(firstNode){
        firstNode = firstNode.next
        i++
        if(i >=k){
           secondNode = secondNode.next
        }
    }
    if(i < k){
        return null
    }
    return secondNode
};

