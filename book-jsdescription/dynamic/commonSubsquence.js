/**
 * 横轴str1,纵轴str2
 * @param {String} str1 
 * @param {String} str2 
 */
const commonSubsquence = (str1,str2)=>{
    let arr = new Array(str1.length);
    const store = {
        max: 0,
        i: 0,
        j: 0
    }
    for(let i = 0, leng1 = arr.length; i < leng1; i++){
        arr[i] = new Array(str2.length);
    }
    for(let i = 0, leng1 = arr.length; i < leng1; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(str1.charAt(i) == str2.charAt(j)){
                if(i == 0 || j == 0){
                    arr[i][j] = 1;
                }else{
                    arr[i][j] = arr[i-1][j-1] + 1;
                }
                if(store.max < arr[i][j]){
                    store.max = arr[i][j];
                    store.i = i;
                    store.j = j;
                }
            }else{
                arr[i][j] = 0;
            }
        }
    }
    // console.log(arr);
    // console.log(store);
    console.log(str1.slice(store.i - (store.max - 1), store.i+1));
}

const getRandomStr = (len)=>{
    let str = '';
    while(str.length < len){
        str += Math.random().toString(36).slice(2)
    }
    return str.slice(-len);
}

const test = ()=>{
    const times = 9000
    let str1 = getRandomStr(times);
    let str2 = getRandomStr(times);
    console.log(str1)
    console.log(str2)
    console.time('common subsequenct')
    commonSubsquence(str1,str2);
    console.timeEnd('common subsequenct')
}

test()