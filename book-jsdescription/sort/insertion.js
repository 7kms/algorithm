const {generateRandomArr} = require('./index');
/**
 * 插入排序
 * 
 * 两层循环
 * 外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。
 * 如果外循环中选中的元素比内循环中选中的元素小(大)，那么数组元素会向右移动，为内循环中的这个元素腾出位置
 * 
 */
let insertionSort = ()=>{
    let arr = generateRandomArr(10);
    console.log('origin arr is', arr);
    let times = 0;
    for(let i = 0; i < arr.length-1; i++){
        console.log('==================');
        let j = i + 1;
        let tmp = arr[j];
        console.log('circulate times %d', ++times);
        while(j > 0 && (arr[j-1] > tmp)){
            console.log('move element %d to %d',arr[j-1], arr[j])
            arr[j] = arr[j-1];
            console.log(arr)
            j--;
        }
        arr[j] = tmp;
        console.log('after move')
        console.log(arr)
        
    }
    console.log('final arr is', arr)
}
insertionSort()