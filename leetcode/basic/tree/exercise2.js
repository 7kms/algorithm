/* 
     验证二叉搜索树
    给定一个二叉树，判断其是否是一个有效的二叉搜索树。

    假设一个二叉搜索树具有如下特征：

    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
    示例 1:

    输入:
     2
    / \
    1   3
    输出: true
    示例 2:

    输入:
     5
    / \
    1   4
        / \
        3   6
    输出: false
    解释: 输入为: [5,1,4,null,null,3,6]。
    根节点的值为 5 ，但是其右子节点值为 4 。

*/


/**
 * 思路1: 先进行二叉树的中序遍历, 结果必然是一个有序数组
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let flag = true;
    let node_var = null;
    const recursion = (TreeNode)=>{
        if(!TreeNode)return
        recursion(TreeNode.left)
        if(node_var != null && TreeNode.val <= node_var){
            flag = false;
            return;
        }
        node_var = TreeNode.val;
        recursion(TreeNode.right)
    }
    recursion(root)
    return flag
};


// var isValidBST = function(root) {
//     const arr = [];
//     const recursion = (TreeNode)=>{
//         if(!TreeNode)return
//         recursion(TreeNode.left)
//         arr.push(TreeNode.val)
//         recursion(TreeNode.right)
//     }
//     recursion(root)
//     for(let i = 0,len = arr.length; i<len-1; i++){
//         if(arr[i+1]<=arr[i]){
//             return false
//         }
//     }
//     return true
// };

 /**
  * 思路2: 根据二叉树的特性 左<中<又 可以进行递归验证
  */