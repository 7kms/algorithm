/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 
 */

 class Test{
    static containsDuplicate(arr){
        for(let i = 0; i<arr.length;i++){
            if(arr.indexOf(arr[i]) < i){
                return true
            }
        }
        return false
    }
 }


let arr = [1,1,1,3,3,4,3,2,4,2];
let arr2 = [1,2,3,4];

console.log(Test.containsDuplicate(arr))

console.log(Test.containsDuplicate(arr2))



