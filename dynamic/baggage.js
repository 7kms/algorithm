let generateRandomArr = (len) => {
    const base = 10;
    let arr = [];
    for(let i = 0; i< len; i++){
        let num = Math.floor(Math.random() * base + 1);
        arr.push(num);
    }
    return arr;
}

/**
 * https://www.nowcoder.com/discuss/3574
 * 0-1背包问题
 * 现有n件物品和一个容量为c的背包
 * 第i件物品的重量为W[i],价值为V[i]
 * 对于一件物品必须选择(用1表示)或者不选择(用0表示),且每件物品只能被选取一次(这就是0-1的含义)
 * 
 * 求放置哪些物品进背包,可以使得这些物品的总量和不超过背包的容量,并且还能使得背包中的物品价值最大
 * 一般地,当背包容量为j,当前物品的位置为i
 *  f[i,j] = Max{ f[i-1,j-Wi] + Vi( j >= Wi ),  f[i-1,j] }
 * 
 */



/**
 * 0-1背包问题: 递归方式实现
 * @param {Array} weightArr 物品质量
 * @param {Array} valueArr 物品价值
 * @param {Number} c 背包容量
 * 
 * 返回值是背包和物品都确定的情况下,背包能容纳的最大价值
 */
const recursion = (weightArr,valueArr,c,n)=>{
    
    if(c == 0 || n == 0){
        return 0;
    }
    let currentWeight = weightArr[n-1];
    let currentValue = valueArr[n-1];
    if(weightArr[n-1] > c){
        return recursion(weightArr,valueArr,c,n-1)
    }else{
        let valueInsert = currentValue + recursion(weightArr,valueArr,c-currentWeight,n-1);
        let valueNotInsert = recursion(weightArr,valueArr,c,n-1);
        if(valueInsert > valueNotInsert){
            return valueInsert
        }else{
            return valueNotInsert
        }
    }
}

/**
 * 背包函数
 * @param {Array} weightArr 物品质量
 * @param {Array} valueArr 物品价值
 * @param {Number} c 背包容量
 * 
 * 输出背包和物品都确定的情况下,背包能容纳的最大价值
 */
const baggage = (weightArr,valueArr,c)=>{
    
    //维护一个二维表,行表示物品w,列表示在背包容量为j.二维表的值表示在背包容量为j,物品为w的情况下,背包能装入的最大值
    const m = new Array(weightArr.length);
    for(let i = 0; i< m.length; i ++){
        m[i] = new Array(c + 1);//其中第0列表示背包容量为0能承载的最大价值
    }

    //初始化第一行,背包中只装第一件物品
    for(let j = 0; j< c+1; j++){
        if(j < weightArr[0]){
            m[0][j] = 0;
        }else{
            m[0][j] = valueArr[0]; 
        }
    }

    //背包中依次装入物品
    for(let i = 1; i< weightArr.length; i ++){
        for(let j = 0; j< c+1; j++){
            if(j < weightArr[i]){
                m[i][j] = m[i-1][j];//重量大于背包,不能装入,价值还和上一次装入的一致
            }else{
                //可以装入背包的时候分为两种情况.
                //1.装入
                //2.不装
                //判断条件: 先将此物装入,再在背包的剩余空间内装入之前出现的最大价值的物品. m[i-1][j-weightArr[i]] + valueArr[i]
                //若此时的背包价值 > 不装入该物品的背包价值(m[i-1][j]).则装入,反之则不
                if((m[i-1][j-weightArr[i]] + valueArr[i]) > m[i-1][j]){
                    m[i][j] = m[i-1][j-weightArr[i]] + valueArr[i];
                }else{
                    m[i][j] = m[i-1][j];
                }
            }
        }
    }
    // console.log('====== 二维表 ======')
    // console.log(m);

    console.log('====== 背包最大值 ======')
    console.log(m[weightArr.length-1][c]);
    
    
    console.log('====== 背包中的元素编号 ======');
    let max = 0;
    let index = c;
    for(let i = m.length-1; i>=1;i--){
        if(m[i][index] > m[i-1][index]){
            index -= weightArr[i];
            max += valueArr[i];
            console.log(i,weightArr[i],valueArr[i])
        }
    }
    if(max < m[weightArr.length-1][c]){
        console.log(0,weightArr[0],valueArr[0])
    }
}


const test = ()=>{
    let weightArr = generateRandomArr(100);//物品重量
    let valueArr = generateRandomArr(100);//物品价值
    const c = 10; //背包容量
    console.time('baggage')
    baggage(weightArr,valueArr,c);
    console.timeEnd('baggage')



    console.log('========= recursion =========')
    console.time('recursion')
    let maxValue = recursion(weightArr,valueArr,c,weightArr.length)
    
    console.log(maxValue)
    console.timeEnd('recursion')
}

test();