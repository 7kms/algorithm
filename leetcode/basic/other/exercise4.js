/* 
帕斯卡三角形

给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = new Array(numRows).fill([]);
    arr = arr.map((item,index)=>{
        return new Array(index+1).fill(1)
    });
    // console.log(arr)
    for(let i = 2; i<numRows; i++){
        // arr[i]
        for(let j =1; j<arr[i].length -1 ;j++){
            // console.log(`第${i}行,${j}列 = ${arr[i-1][j-1]} + ${arr[i-1][j]} = ${arr[i-1][j-1]+arr[i-1][j]}`)
            arr[i][j] = arr[i-1][j-1]+arr[i-1][j];
        }
    }
    return arr;
};

console.log(JSON.stringify(generate(3)))