/**
 *  合并两个有序链表
 * 
 * 
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

    示例：

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4

  
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 输入：1->4->7, 1->2->3->6
    // 1->1->2->3->4->6->7
    let head = null;
    let tmp = l1;
    let head1 = l1, head2=l2;
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    if(l1.val >= l2.val){
        tmp = l2;
        head2 = head2.next;
    }else{
        tmp = l1;
        head1 = head1.next;
    }
    head = tmp;
    while(true){
        if(!head1){
            tmp.next = head2;
            break;
        }
        if(!head2){
            tmp.next = head1;
            break;
        }
        if(head1.val <= head2.val){
            tmp.next = head1;
            head1 = head1.next;
        }else{
            tmp.next = head2;
            head2 = head2.next;
        }
        tmp = tmp.next;
    }
    return head;
};