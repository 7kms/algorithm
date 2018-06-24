const BST = require('./index2')


/**
 * 
 * @param {Array} arr 
 */
function prArray(arr) {
    let str = ''
    for (var i = 0; i < arr.length; ++i) {
        str += arr[i].toString() + ' '
       if ((i+1) % 10 == 0) {
          str += '\n'
       }
    }
    console.log(str)
}


/**
 * 随机产生成绩
 * @param {number} length 产生的随机数组的长度
 */
function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr; 
}




let test = ()=>{
    var grades = genArray(100);
    prArray(grades);
    var gradedistro = new BST();
    for (var i = 0; i < grades.length; ++i) {
        var g = grades[i];
        var grade = gradedistro.find(g); 
        if (grade == null) {
          gradedistro.insert(g);
        }else {
          gradedistro.update(g);
        } 
    }
    BST.preOrder(gradedistro.root)
    console.log(gradedistro.length())
    
        // var cont = "y";
        // while (cont == "y") { 
        //     console.log("\n\nEnter a grade: "); 
        //     var g = Math.floor(Math.random() * 101);
        //     var aGrade = gradedistro.find(g); 
        //     if (aGrade == null) {
        //        console.log("No occurrences of " + g);
        //     }else {
        //        console.log("Occurrences of " + g + ": " + aGrade.count);
        //        if(aGrade.count>1){cont = 'no'}
               
        //     }
        // }
}

test()