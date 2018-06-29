/**
 *  验证回文字符串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。
示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let minCharacter = '0'
    let maxCharecter = 'z'
    let minCode = minCharacter.charCodeAt()
    let maxCode = maxCharecter.charCodeAt()
    console.log(`mincode = ${minCode}, maxCode = ${maxCode}`)
    for(let i = minCode; i <= maxCode; i++){
        console.log(String.fromCharCode(i))
    }

    let i = 0, j = s.length- 1;
    for(;i <= j; i++,j--){
        let charStart = s.charAt(i)
        let charEnd = s.charAt(j)
        let startCode = charStart.charCodeAt()
        let endCode = charEnd.charCodeAt()
        console.log(charStart,startCode,charEnd,endCode)
        while(startCode > maxCode || startCode < minCode){
            i++;
            charStart = s.charAt(i);
            startCode = charStart.charCodeAt()
        }
        while(endCode > maxCode || endCode < maxCode){
            j--;
            charEnd = s.charAt(j);
            endCode = charEnd.charCodeAt()
        }
        console.log(i,charStart,charEnd)
        if(charStart !== charEnd){
            return false;
        }
    }
    return true;
};


var isPalindrome2 = function(s) {
    s = s.toLowerCase()
    let reg = /(\d|\w)/
    let i = 0, j = s.length- 1;
    while(i<j){
        let charStart = s.charAt(i)
        let charEnd = s.charAt(j)
        while(i < j && !reg.test(charStart)){
            i++;
            charStart = s.charAt(i);
        }
        while(i < j && !reg.test(charEnd)){
            j--;
            charEnd = s.charAt(j);
        }
        console.log(i,charStart,j,charEnd)
        if(charStart == charEnd){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
};
let str = '`1`2`3-1----0-------01--32`1'
console.log(isPalindrome2(str))


