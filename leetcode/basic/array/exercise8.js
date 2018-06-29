/**
 * 
 * 
 *  给定一个 n × n 的二维矩阵表示一个图像。
    将图像顺时针旋转 90 度。
    说明：
    你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
    
    示例 1:

    给定 matrix = 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],

    原地旋转输入矩阵，使其变为:
    [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]
    示例 2:

    给定 matrix =
    [
        [ 5, 1, 9,11],
        [ 2, 4, 8,10],
        [13, 3, 6, 7],
        [15,14,12,16]
    ], 

    原地旋转输入矩阵，使其变为:
    [
        [15,13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7,10,11]
    ]
 * 
*/

/**
 * [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    顺时针旋转
    1. 交换主对角线两侧的对称元素
    2. 交换第i行和第n-1-i行
    
    
    交换对角线arr[x][y] -> arr[n-1-y,n-1-x]
    [
        [9,6,3],
        [8,5,2],
        [7,4,1]
    ]
    交换i,n-1-i行
    [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]

 * 
 */
const swap = (arr,point1,point2)=>{
    let temp = arr[point1.x][point1.y]
    arr[point1.x][point1.y] = arr[point2.x][point2.y]
    arr[point2.x][point2.y] = temp
}

 const test = (arr)=>{
    //1. 交换主对角线两侧的对称元素
    let len = arr.length;
    for(let i = 0; i < len-1; i++){
        for(let j = 0; j < len-1-i; j++){
            swap(arr,{x:i,y:j},{x:len-1-j,y:len-1-i})
        }
    }
    console.log(arr)
    //2. 交换第i行和第n-1-i行
    for(let i = 0; i<= (len-1)/2; i++){
        let temp = arr[len-1-i];
        arr[len-1-i] = arr[i];
        arr[i] = temp; 
    }

 }


 var arr = [
     [5,1,9,11],
     [2,4,8,10],
     [13,3,6,7],
     [15,14,12,16]
    ]
test(arr)
console.log(arr)