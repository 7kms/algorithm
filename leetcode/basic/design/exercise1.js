/**
 * Shuffle an Array
 */
/**
 * 打乱一个没有重复元素的数组。
 * 
 * 示例:
 * 
 * // 以数字集合 1, 2 和 3 初始化数组。
    int[] nums = {1,2,3};
    Solution solution = new Solution(nums);

    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
    solution.shuffle();

    // 重设数组到它的初始状态[1,2,3]。
    solution.reset();

    // 随机返回数组[1,2,3]打乱后的结果。
    solution.shuffle();
 */
const {swap} = require('../util')
 /**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.originNums = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.originNums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let arr = this.nums;
    for(let len = arr.length, i = len; i>0; i--){
        let random = Math.ceil(Math.random()*len)
        let targetIndex = random % i;
    //    console.log(i,random, targetIndex)
        if(targetIndex){
            swap(arr, targetIndex-1, i-1)
        // console.log(`换位`, arr)
        }
    }
    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
 var allsort = function(arr,start,end){
    console.log(`进入排列 start=${start}`, arr)
    if(start > end){
        // 此时的arr可以算是其中一个排列
        console.log('排列结果')
        console.log(arr)
        return;
    }
    for(let i = start; i<=end; i++){
        console.log(`交换前 start=${start}, i=${i}`,arr)
        swap(arr, start , i);
        console.log(`交换后 start=${start}, i=${i}`,arr)
        // console.log(`进入全排列 start=${start}, i=${i} `, arr)
        allsort(arr, start+1, end);
        swap(arr, start , i);
    }
    // console.log(`一轮排列完成 start=${start}`, arr)
 }

 const randomSort = function(arr,start,end){
    console.log(`进入排列 start=${start}, end=${end}`, arr)
    if(start >= end){
        // 此时的arr可以算是其中一个排列
        console.log('排列结果')
        console.log(arr)
        return;
    }
    const current = start + Math.ceil(Math.random()*(end-start));
    swap(arr, start, current);
    randomSort(arr, current, end);
    swap(arr, start, current);
 }

 const shuffle = (arr)=>{
    for(let len = arr.length, i = len; i>0; i--){
        let random = Math.ceil(Math.random()*len)
       let targetIndex = random % i;
    //    console.log(i,random, targetIndex)
       if(targetIndex){
        swap(arr, targetIndex-1, i-1)
        // console.log(`换位`, arr)
       }
    }
    return arr;
 }

 ;(()=>{
    const arr = [1,3,5];
    // randomSort(arr, Math.floor(Math.random()*3) ,2);
    console.log(shuffle(arr))
 })();