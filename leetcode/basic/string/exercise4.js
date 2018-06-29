/**
 * 
 * 有效的字母异位词
 * 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false
    }
    let coutObj1 = getCharCountInString(s);
    let coutObj2 = getCharCountInString(t)
    let keys1 = Object.keys(coutObj1);
    let keys2 = Object.keys(coutObj2);
    if(keys1.length != keys2.length){
        return false;
    }

    for(let i = keys1.length -1; i>=0;i--){
        let char = keys1[i]
        if(coutObj1[char] !== coutObj2[char]){
            return false
        }
    }
    return true
};

var getCharCountInString = (str)=>{
    let obj = {};
    let len = str.length;
    for(let i = 0; i < len; i++){
        let char = str.charAt(i);
        if(!obj[char]){
            obj[char] = 0
        }
        obj[char]++
    }
    return obj;
    
}