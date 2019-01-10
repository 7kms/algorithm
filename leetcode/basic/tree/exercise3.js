/**
 * 
 * 给定一个二叉树，检查它是否是镜像对称的。

    例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3

   说明:
如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 思路1: 将二叉树进行层序遍历, 把每一层的数字放入到一个数组当中进行对称验证
// 思路2: 

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const checkArrSymmetry = (arr)=>{
        for(let i = 0, j = arr.length-1; i<j;i++,j--){
            if(arr[i] != arr[j]){
                if(arr[i] == null || arr[j]==null){
                    return false
                }
                if(arr[i].val != arr[j].val){
                    return false
                }
            }
        }
        return true
    }
    
    const recurisive = (list=[])=>{
        if(!checkArrSymmetry(list)){
            return false;
        }
        const nextList = [];
        while(true){
            const node = list.shift()
            if(typeof node == 'undefined'){
                break;
            }
            if(node){
                nextList.push(node.left)
                nextList.push(node.right)
            }
        }
        if(nextList.length){
            return  recurisive(nextList)
        }
        return true;
    }

    return recurisive([root])
};