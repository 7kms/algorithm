/**
 * 最长公共前缀
 * 
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    说明:

    所有输入只包含小写字母 a-z 。
 * 
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let publicStr = strs[0] || '';
    let i = 1;
    let len = strs.length;
    while(i < len){
        publicStr = getPublicStr(publicStr,strs[i++]);
        if(!publicStr.length){
            break;
         }
    }
    return publicStr;
};
var getPublicStr = function(str1,str2){
   let i = 0;
   let len1 = str1.length;
   let len2 = str2.length;
   while(str1.charAt(i) == str2.charAt(i)){
       if(++i > Math.min(len1,len2)){
           break;
       }
   }
   return str1.slice(0,i)
}

console.log(longestCommonPrefix(["acc","aaa","aaba"]))