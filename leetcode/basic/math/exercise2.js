/* 
计数质数
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

*/


/**
 * 思路: 筛选法
 * 开辟一个数组空间来保存是否是素数
 * 内侧循环筛选出2,3,5,7...的倍数
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let primeArr = new Array(n);
    let count = 0;
    for(let i = 2; i < n ;i++){
        if(!primeArr[i-1]){
            count++;
            // console.log(i);
            for(let j = i*2; j < n ; j+=i){
                // count++;
                primeArr[j-1] = true;
            }
        }
    }
    return count;
};


countPrimes(100)