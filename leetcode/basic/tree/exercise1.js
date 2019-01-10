/* 

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。 

*/


/**
 * Definition for a binary tree node.
 */
/*  function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
 }
 */


/* 
    思路1: 深度优先遍历(DFS), 从上至下递归查找当前节点的左右叶子节点, 将高度相加 
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth1 = function(root) {
    if(!root)return 0

    return 1 + Math.max(maxDepth1(root.left), maxDepth1(root.right))
};

/* 
    思路2: 采用广度优先遍历(BFS), 对于二叉树来讲算是逐层遍历, 每遍历一层, 高度加1
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function(root) {
    if(!root)return 0;
    let result = 0;
    let queue = [];
    queue.push(root);
    while (queue.length) {
        result ++;
        // 获取每一层的节点个数
        let len = queue.length;
        // 将第result层的所有节点都取出来
        for(let i = 0; i<len; i++){
            let node = queue.shift();
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
        }
    }
    return  result;
};