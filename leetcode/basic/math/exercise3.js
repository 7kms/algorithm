/**
    3的幂
    给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

输入: 27
输出: true
示例 2:

输入: 0
输出: false
示例 3:

输入: 9
输出: true
示例 4:

输入: 45
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？

 */

/**
 * 思路1: 用递归方式求解, 循环除以3, 判断条件(n%3===0)
 */
 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let flag = true;
    if(n==0){
        flag = false;
    }else if(n==1){
        flag = true;
    }else{
        if(n%3==0){
            return isPowerOfThree(n/3)
        }else{
            return false;
        }
    }
    return flag;
};

/* 
思路2: 通过对数直接求解, log3 N = Math.log10(n)/Math.log10(3)
*/

 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree2 = function(n) {
    const target = Math.log10(n)/Math.log10(3);
    return target - parseInt(target) == 0;
};