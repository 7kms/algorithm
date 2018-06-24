const fs = require('fs');
const path = require('path')

const {mergeSort} = require('../sort/merge');

let generateRandomArr = (len) => {
    const base = 1000;
    let arr = [];
    for(let i = 0; i< len; i++){
        let num = Math.floor(Math.random() * base + 1);
        arr.push(num);
    }
    return arr;
}

let swap = (arr, index1,index2)=>{
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

let seq = (arr,data)=>{
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == data){
            return i;
        }
    }
    return false;
}


let binSearch = (arr,data)=>{
    let lowerBounds = 0, upperBounds = arr.length - 1;
    while(lowerBounds <= upperBounds){
        let mid = Math.floor((lowerBounds + upperBounds)/2);
        // console.log(mid,arr[mid]);
        if(arr[mid] < data){
            lowerBounds = mid + 1;
        }else if(arr[mid] > data){
            upperBounds = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}



let test = ()=>{
    let arr  =  generateRandomArr(10000000);
    console.time('merge sort')
    mergeSort(arr);
    console.timeEnd('merge sort')

    console.time('seqSearch')
    seq(arr);
    console.timeEnd('seqSearch')
    // console.log(arr.toString())
    console.time('binSearch')
    let index = binSearch(arr,99);
    console.timeEnd('binSearch')
    console.log(index,arr[index]);
}

// test();


let test2 = ()=>{
    let data = fs.readFileSync(path.resolve(__dirname, './text.txt'),'utf8');
    let arr = data.split(/\s+/);
    mergeSort(arr);
    // console.log(arr.length)
    console.log(arr.toString())

    console.time('binSearch')
    let index = binSearch(arr,'West');
    console.timeEnd('binSearch')
    console.log(index,arr[index]);
}
test2();


