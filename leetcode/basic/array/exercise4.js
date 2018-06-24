var intersect = function(nums1, nums2) {
    let arr = [];
   if(!nums1 || !nums2){
       return arr
   }
  console.log(nums1,nums2)
   nums1.forEach(num=>{
       if(nums2.length < 1){
           return
       }
       let num2index = nums2.indexOf(num)
       console.log(num2index)
       if(num2index > -1){
           let point = nums2.splice(num2index,1)
           arr = arr.concat(point)
       }
   })
   return arr;
};


var ifArrIsSort = (arr1, arr2)=>{
    const result = []
    let i = 0;let j = 0;
    for(;i<arr1.length;i++){
        for(;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                result.push(arr1[i])
                j++;
                break;
            }
        }
    }
}

var ifArrIsSort2optimize = (arr1, arr2)=>{
    const result = []
    let i = 0;let j = 0;
    while(i< arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            i++
        }else if(arr1[i] > arr2[j]){
            j++
        }else{
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    return result
}
console.log(intersect([1],[1]))