/* 
    买卖股票的最佳时机

    给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

    如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

    注意你不能在买入股票前卖出股票。

    示例 1: 

    输入: [7,1,5,3,6,4]
    输出: 5
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5
        注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
    示例 2:

    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0
*/

/**
 * 思路: 因为只能有1次交易
 * 
 * 以每一元素为基准, 依次遍历其后的所有元素, 保存差值最大的即可
 * 时间复杂度 n**2
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let len = prices.length;
    for(let i =0; i<len;i++){
        for(let j = i+1; j< len; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i]
            }
        }
    }
    return profit
};

/**
 * 改进方式:
 * 之前的方式是全遍历,事实上我们可以减少一些无意义的遍历, 降低时间复杂度
 * 如 输入: [7,1,5,3,6,4]
 * 当遍历到1时, profit 为 5 (6-1)
 * 此后的买点都比1大(利润肯定比以1买入的小), 其实已经不需要再遍历比较了
 * 所以: 当检测到profit>0的时候, 保存此刻的买点, 后续出现更低的买点的时候再进行遍历比较
 */

var maxProfit2 = function(prices) {
    let len = prices.length;
    if(len < 1){
        return 0;
    }
    let profit = 0;
    let buy = prices[0];
    for(let i =0; i<len;i++){
        if(i>0 && prices[i] >= buy){
            continue;
        }
        for(let j = i+1; j< len; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i]
                buy = prices[i];
            }
        }
    }
    return profit
};

/**
 * 思路:3
 * 只进行一次循环
 * 同时保存最低的买点,和最高的利润
 * 最后返回最高的利润
 * 
 */

var maxProfit3 = function(prices) {
    if(prices.length < 1){
        return 0;
    }
    let buy = prices[0];
    let profit = 0;
    for(let i = 0; i< prices.length; i++){
        if(prices[i]<buy){
            buy = prices[i]
            continue;
        }
        if(prices[i] - buy > profit){
            profit = prices[i] - buy
        }
    }
    return profit;
};

console.log(maxProfit3([7,1,5,3,6,4]))