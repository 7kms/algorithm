class Util {
    static swap(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
}

module.exports = Util;