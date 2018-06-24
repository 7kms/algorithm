const {generateRandomArr,swap} = require('./index');


let quickSort = (arr)=> {
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(pivot,quickSort(rightArr));
}


let quickSort2 = function(arr, start, end){
    if(arguments.length == 1){
        start = 0;
        end = arr.length - 1;
    }
    if(start >= end || arr.length < 2) return;
    let pivot = start;
    let i = start, j = end;
    // console.log('======= sort start ========')
    // console.log('initial array is', arr.slice(start,end+1))
    while(i < j){
        for(; i<=j; j--){
            // console.log('<---- i=%d j=%d pivot=arr[%d]=%d',i,j,pivot,arr[pivot]);
            if(arr[j] < arr[pivot]){
                swap(arr, j, pivot);
                // console.log(arr)
                pivot = j;
                j--;
                break;
            }
        }
        for(; i <= j; i++){
            // console.log('----> i=%d j=%d pivot=arr[%d]=%d',i,j,pivot,arr[pivot]);
            if(arr[i] > arr[pivot]){
                swap(arr, i, pivot);
                // console.log(arr)
                pivot = i;
                i++;
                break;
            }
        }
    }
    // console.log('segement array ',arr.slice(start,end+1))
    // sort segement array
    quickSort2(arr,start,pivot);
    quickSort2(arr,pivot+1,end);
    // return quickSort2(arr,);
}



var st = function(arr,start,end){
    if(arguments.length == 1){
        start = 0;
        end = arr.length - 1;
    }
    if(start >= end || arr.length < 2) return;

    let pivot = start;
    let i = start;
    let j = end;
    while(i < j){
        while(j > pivot){
            if(arr[j] < arr[pivot]){
                swap(arr,j,pivot)
                pivot = j
            }
            j--
        }
        while(i < pivot){
            if(arr[i] > arr[pivot]){
                swap(arr,i,pivot)
                pivot = i
            }
            i++
        }
    }
    st(arr,start,pivot-1)
    st(arr,pivot+1,end)
    
}

let test = ()=>{
   
    let arr = generateRandomArr(100);
    console.log('origin arr ', arr.toString());
    // let finallyArr = quickSort(arr);
    st(arr);
    
    console.log('finally arr',arr.toString());
}

test()



