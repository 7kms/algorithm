/**
 * 字符串中的第一个唯一字符
 * 
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 
    案例:
    s = "leetcode"
    返回 0.
    s = "loveleetcode",
    返回 2.
    注意事项：您可以假定该字符串只包含小写字母。
 */

 /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let len = s.length;
    let obj = {}
    for(let i = 0; i < len; i++){
        if(!obj[s.charAt(i)]){
            obj[s.charAt(i)] = true
        }else{
            continue
        }
        let flag = true;
        for(let j = len - 1; j>i; j--){
            if(s.charAt(i) == s.charAt(j)){
                flag = false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
};

let s = "loveleetcode"

console.log(firstUniqChar(s))