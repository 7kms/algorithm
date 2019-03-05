/* 

缺失数字


给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = new Array(nums.length+1);
    for(let i = 0; i < nums.length;i++){
        arr[nums[i]] = nums[i]
    }
    for(let i = arr.length-1;i>=0;i--){
        if(arr[i] == null){
            return i;
        }
    }
};


var missingNumber2 = function(nums) {
    let temp;
    let point = 0;
    let len = nums.length;
    let target = nums.length;
    while(point < len){
        let current = nums[point];
        if(current === point){
            point++;
        }else if (current === null){
            target = point;
            point++;
        }else if(current >= len){
            temp = current;
            nums[point] = null;
        }else{
            temp = nums[current];
            nums[current] = current;
            nums[point] = temp;
        }
    }
    return target
};


console.log(missingNumber2([3,0,1]))
console.log(missingNumber2([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber2([2,0,1]))
console.log(missingNumber2([2,3,1]))