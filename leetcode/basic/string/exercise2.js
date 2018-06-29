/**
 * 
 *  颠倒整数
 * 
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。

    示例 1:

    输入: 123
    输出: 321
    示例 2:

    输入: -123
    输出: -321
    示例 3:

    输入: 120
    输出: 21
    注意:
    假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 */


 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x> Math.pow(2,31) - 1 || x < -Math.pow(2,31)){
        return 0;
    }
    let isNegative, absoluteValue, temp = 0;
    if(x < 0){
        isNegative = true;
        absoluteValue = -x;
    }else{
        isNegative = false;
        absoluteValue = x;
    }
    while(absoluteValue > 0){
        let lastPlace = absoluteValue % 10;
        absoluteValue = parseInt(absoluteValue/10);
        temp = temp * 10 + lastPlace;
        if(temp > Math.pow(2,31) - 1){
            return 0
        }
    }
   
    return isNegative ? -temp : temp;

};

console.log(reverse(123400000000110))