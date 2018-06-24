

const {generateRandomArr} = require('./index');

let mergeSort = (arr)=>{
    if(arr.length < 2){
        return arr;
    }
    let step = 1;
    let left,right;
    while(step < arr.length){
        left = 0;
        right = step;
        // console.log('============before circular============')
        // console.log('left=%d right=%d',left,right);
        while(right + step <= arr.length){
            mergeArrays(arr,left,left+step,right,right+step);
            left = right + step;
            right = left + step;
        }
        // console.log('============after circular============')
        // console.log('left=%d right=%d',left,right);
        if(right < arr.length){
            mergeArrays(arr,left,left+step,right,arr.length);
        }
        step *= 2;
    }
}
let mergeArrays = (arr,leftStart,leftEnd,rightStart,rightEnd)=>{
    // console.log('leftStart=%d leftEnd=%d rightStart=%d rightEnd=%d',leftStart,leftEnd,rightStart,rightEnd);

    /** Initial left and right array **/
    let leftArr = new Array(leftEnd - leftStart);
    let rightArr = new Array(rightEnd - rightStart);
    let k = leftStart;
    for(let i = 0;i < leftArr.length; i++){
        leftArr[i] = arr[k];
        k ++;
    }
    k = rightStart;
    for(let i = 0;i < rightArr.length; i++){
        rightArr[i] = arr[k];
        k ++;
    }
    // leftArr[leftArr.length-1] = Infinity;
    // rightArr[rightArr.length-1] = Infinity;


    /** sort positions of left and right arr at the origin array */
    let m = 0,n = 0;
    for(let i = leftStart; i < rightEnd; i++){
        if(m >= leftArr.length && n >= rightArr.length){
            break;
        }
        if(m >= leftArr.length){
            arr[i] = rightArr[n];
            n ++;
        }else if(n >= rightArr.length){
            arr[i] = leftArr[m];
            m ++;
        }
        else if(leftArr[m] < rightArr[n]){
            arr[i] = leftArr[m];
            m ++;
        }else{
            arr[i] = rightArr[n];
            n ++;
        }
    }
    // console.log('left arr', leftArr);
    // console.log('right arr', rightArr);
}

module.exports = {
    mergeSort
}
let test = ()=>{
    
   
    let arr = generateRandomArr(1000000);
    // console.log('origin array', arr.toString());
    console.time('test')
    mergeSort(arr);
    console.timeEnd('test')
    // console.log('finally array',arr);
}

// test();