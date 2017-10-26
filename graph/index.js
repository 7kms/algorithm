class Graph {
    constructor(v){
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        this.edgeTo = [];
        for(let i = 0; i< v; i ++){
            this.adj[i] = [];
            this.marked[i] = false;
        }
    }
    addEdge(v,w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    showGraph(){
        for(var i = 0; i< this.vertices; i++){
            let str = i + ' -> ';
            for(var j = 0; j < this.vertices; j++){
                if(this.adj[i][j] != undefined){
                    str += this.adj[i][j] + ' ';
                }
            }
            console.log(str);
        }
    }
    clearMark(){
        this.marked = []
    }
    /**
     * 深度优先搜索
     * 访问一个没有访问过的顶点，将它标记为已访问，再递归地
     * 去访问在初始顶点的邻接表中其他没有访问过的顶点
     * @param {*number} v 
     */
    dfs(v){
        this.clearMark();
        this.marked[v] = true;
        console.log("Visited vertex:  " + v);
        for(let i = 0; i < this.adj[v].length; i++){
            let w = this.adj[v][i]
            if(!this.marked[w]){
                this.dfs(w)
            }
        }
    }

    /**
     * 广度优先搜索
     * 
     * @param {*number} v 
     */
    fbs(s){
        this.clearMark();
        let queue = [];
        queue.push(s);
        this.marked[s] = true;
        while(queue.length > 0){
            let v = queue.shift();
            console.log("Visited vertex:  " + v);
            // console.log(this.adj[v])
            for(let i = 0; i < this.adj[v].length; i ++){
               let w =  this.adj[v][i];
                if(!this.marked[w]){
                    queue.push(w);
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                }
            }
        }
    }
    pathTo(v){
        let source = 0;
        if(!this.marked[v]){
            //如果没有被mark的点,说明邻接表里面没有路径可以通向这个点
            return undefined;
        }
        let path = [v]; 
        let i = this.edgeTo[v];
        while(i != source){
            path.push(i);
            i = this.edgeTo[i];
        }
        path.push(source);
        return path.reverse();
    }
}
module.exports = Graph;