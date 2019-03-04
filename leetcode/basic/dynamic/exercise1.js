/* 
爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

    输入： 2
    输出： 2
    解释： 有两种方法可以爬到楼顶。
    1.  1 阶 + 1 阶
    2.  2 阶
示例 2：

    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。
    1.  1 阶 + 1 阶 + 1 阶
    2.  1 阶 + 2 阶
    3.  2 阶 + 1 阶
*/

/**
 * 思路: 楼梯的最后一步只有两种情况(最后1阶到达,最后2阶到达)
 * 所以第n步等于n-1和n-2步情况之和
 * 如用递归解法:
 * climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
 * 然后将其转换为动态规划
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if(n <=2){
        return n;
    }
    let result;
    let base0 = 1;
    let base1 = 2;
    for(let i = 2; i<n; i++){
        result = base0 + base1;
        base0 = base1;
        base1 = result;
    }
    return result;
};


console.log(climbStairs(5))