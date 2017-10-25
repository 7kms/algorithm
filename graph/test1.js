const Graph = require('./index')
let test = ()=>{
    let g = new Graph(5);
    
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.showGraph();
    console.log('dfs')
    g.dfs(0);
    g.clearMark();

    console.log('fbs')
    g.fbs(0);
}

test();
