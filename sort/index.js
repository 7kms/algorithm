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
module.exports = {
    generateRandomArr,
    swap
}