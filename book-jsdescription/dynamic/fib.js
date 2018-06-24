let timmer = (sign)=>{
    return (fn)=>(...arg)=>{
        console.time(sign);
        let res = fn(...arg);
        console.timeEnd(sign);
        return res;
    }
}

let recurFib = (n)=>{
    if(n < 2){
        return n;
    }
    return recurFib(n-2) + recurFib(n-1)
}
// 0 1 1 2 3 5 8 ...
let dynFib = (n)=>{
    if(n < 2){
        return n;
    }
    let m = 0, k = 1, r = 1;
    for(let i = 2; i <= n; i++){
        r = m + k;
        m = k;
        k = r;
    }
    return k;
}

let test = ()=>{

   const position = 30;
   for(let i = 0; i<= position ;i++){
    console.log('==== '+ i +'======')
    let res =  timmer('recurFib')(recurFib)(i);
    console.log(res)
    let res2 =  timmer('dynFib')(dynFib)(i);
    console.log(res2)
   }
   
}

test()