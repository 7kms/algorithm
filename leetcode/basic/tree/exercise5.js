// 将升序数组转换成平衡二叉搜索树

/* 
    思路: 
    1. 将数组的中间点作为二叉树的根节点, 分成左右两棵子树.
    2. 将左右两棵子树递归步骤1, 直到最终只剩下一个节点
    3. 此时将会得到平衡二叉搜索树 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 不考虑空间复杂度, 将会新建多个临时数组
var sortedArrayToBST = function(nums) {
    const recursion = (arr=[])=>{
        if(!arr.length){
            return null;
        }
        const middle = Math.floor(arr.length/2)
        const node = new TreeNode(arr[middle])

        const leftArr = arr.slice(0,middle)
        const rightArr = arr.slice(middle+1)
        node.left = recursion(leftArr)
        node.right = recursion(rightArr)
        return node;
    }
    return recursion(nums)
};



// 将原始数组进行分段, 减少空间复杂度(待解决)
// var sortedArrayToBST = function(nums) {
//     const recursion = (arr=[],start,end)=>{
//         if(start >= end){
//             return null;
//         }
//         const middle = Math.floor((start+end)/2)
//         const node = new TreeNode(arr[middle])
//         node.left = recursion(arr, start, middle)
//         node.right = recursion(arr, middle+1, end)
//         return node;
//     }
//     return recursion(nums,0, nums.length - 1)
// };
