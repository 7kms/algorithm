/**
 * 实现strStr()
 * 
 * 
 * 
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let haystackLen = haystack.length;
    let needleLen = needle.length;
    if (!needleLen) {
        return 0;
    }
    if (needleLen > haystackLen) {
        return -1;
    }
    for (let i = 0; i <= haystackLen - needleLen; i++) {
        let pivot = i;
        
        for (let j = 0; j < needleLen; j++) {
            if (haystack[pivot] == needle[j]) {
                pivot++
            } else {
                break;
            }
        }
        if (pivot - i == needleLen) {
            return i;
        }
    }
    return -1;
};

let str1 = 'hello'

let str2 = ""



console.log(strStr(str1, str2))