const {generateRandomArr,swap} = require('./index');
/**
 * 选择排序从数组的开头开始，将第一个元素和其他元 素进行比较。
 * 检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从 第二个位置继续。
 * 这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便 完成了排序。
 */
let switchSort = ()=>{
    let arr = generateRandomArr(10), times=0;
    console.log('origin arr ', arr);
    for(let i = 0; i < arr.length -1; i ++){
        console.log('==================')
        
        for(let j = i+1; j< arr.length; j++){
            console.log('circulate times %d, i=%d, j=%d', ++times, i, j)
            if(arr[i] > arr[j]){
                swap(arr,i,j);
                console.log('swap %d %d',i,j)
                console.log('swaped arr',arr)
            }
        }
    }
    console.log('finally arr ', arr);
   
}
switchSort()