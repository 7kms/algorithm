
//解决碰撞: 1. 开链法 2.线性探索法

class HashTable {
    constructor(){
        this.table = new Array(137);
    }
    put(data){
        var pos = this.betterHash(data);
        this.table[pos] = data;
    }
    simpleHash(){
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
           total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
           total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        return parseInt(total);
     }
    showDistro(){
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) { 
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
}

module.exports = HashTable;