/**
 *   反转链表
 * 
    反转一个单链表。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
    进阶:
    你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newTail = null; // 反转后的尾节点
    let newHead = null; // 反转后的头节点
    let current = head; // 当前处理节点
    while(current){
        let next = current.next;
        if(!next){
            newHead = current;
        }
        current.next = newTail;
        newTail = current;
        current = next;
    }
    return newHead;
};


// 递归的方式实现
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function(head) {
    if(head == null || head.next == null){return head}
    let newHead = reverseList2(head.next); //反转后链表的头结点
    head.next.next = head; // 反转下一个节点的指针
    head.next = null;// 设置链表的尾节点
    return newHead
};