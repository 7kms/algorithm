const {generateRandomArr,swap} = require('./index');
let bubbleSort = ()=>{
    let arr = generateRandomArr(10);
    console.log('origin arr is', arr);
    let times = 0;
    for(let i = 0; i < arr.length-1; i++){
        console.log('==================')
        for(let j= 0; j < arr.length-i-1; j++){
            console.log('circulate times %d, i=%d, j=%d', ++times, i, j)
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                console.log('swap %d %d',j,j+1)
                console.log('swaped arr',arr)
            }
            
        }
    }
    console.log('final arr is', arr)
}
bubbleSort()