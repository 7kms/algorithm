const Graph = require('./index')
let test = ()=>{
    let g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.showGraph();
    console.log('执行一次广度优先遍历')
    g.fbs(0);
    //
    var vertex = 4;
    var paths = g.pathTo(vertex);
    console.log(paths);
}

test();
