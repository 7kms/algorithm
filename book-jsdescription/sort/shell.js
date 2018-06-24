const {generateRandomArr} = require('./index');
/**
 * 希尔排序
 * 
 */
let shellSort = ()=>{
    let arr = generateRandomArr(10);
    // let gaps = [3,2,1];
    var N = arr.length;
    var gap = 1;
    while (gap < N/3) {
        gap = 3 * gap + 1; 
    }
    console.log('origin arr is', arr.toString());
    while(gap >=1){
        for(let j = gap; j < arr.length; j++){
            let k = j;
            let tmp = arr[k];
            while( k >= gap && (tmp < arr[k-gap])){
                arr[k] = arr[k-gap];
                k -= gap;
            }
            arr[k] = tmp;
        }
        gap = (gap-1)/3;
    }
    console.log('final arr is', arr.toString());
}

shellSort()