/**
 * 环形链表
 * 
 * 
    给定一个链表，判断链表中是否有环。

    进阶：
    你能否不使用额外空间解决此题？


    思路 1. 反转链表法
    如果链表中有环, 反转之后的末尾必然是原点
    
    思路 2. 快慢指针法
    如果链表中有环, 快指针fast的速度比慢指针slow的速度快即可, 当两个指针都进入环形区域之后, 快慢指针必然会相遇

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
var hasCycle = function(head) {
    if(!(head && head.next)){
        return false
    }
    let start = head;
    let end = reverseChain(head)
    return start == end;
};


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


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function(head) {
    if(!(head && head.next)){
        return false
    }
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            return true;
        }
    }
    return false;
};
