/**
 * 回文链表
 * 
 * 请判断一个链表是否为回文链表。

    示例 1:

    输入: 1->2
    输出: false
    示例 2:

    输入: 1->2->2->1
    输出: true
    进阶：
    你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!(head && head.next)){
        return true;
    }
    // 快慢指针法取链表中点
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    // 反转链表的后半部分
   let end = reverseChain(slow.next)
   let start = head;

   while(end){
       if(end.val == start.val){
           end = end.next;
           start = start.next;
       }else{
           return false
       }
   }
   return true;
};

/**
 * 1->2->3->4->5
 * 
 * @param {*ListNode} head 
 * @return {ListNode}
 */
var reverseChain = (head)=>{
    if(!head){
        return head;
    }
    let current = head;
    let forward = current.next;
    current.next = null;
    while(forward){
        let temp = forward.next;
        forward.next = current;
        current = forward;
        forward = temp;
    }
    return current;
}