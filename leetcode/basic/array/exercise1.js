// 数组旋转;
// [1,2,3,4,5,6] 向右旋转2次 将变为 [5,6,1,2,3,4]
// [1,2,3] 2 ---> [3,2,1]

const {swap} = require('../util')
/**
 * 经典解法: 以 arr.length - k%arr.length 为零界点 进行3次反转!
 * 
 * @param {Array} arr , The origin array
 * @param {Number} k , the number to rotate
 */
const arrayRotate  = (arr,k)=>{
    let newK = k % arr.length;
    if(newK == 0){
        return;
    }
    let middle = arr.length - newK;
    reverse(arr,0,middle-1)
    reverse(arr,middle,arr.length-1)
    reverse(arr)
}

const reverse = (...args)=>{
    let arr = args[0]
    let i, j;
    if(args.length == 1){
        i = 0, j = arr.length -1;
    }else{
        i = args[1];
        j = args[2]
    }
    while(i < j){
        swap(arr,i,j);
        i++;
        j--;
    }
}

const test = ()=>{
    let array = [1,2,3,4,5,6,7,8,9,10,11,12];
    console.log(array)
    arrayRotate(array, 3);
    console.log(array)
}

test()
