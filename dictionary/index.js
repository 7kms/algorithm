class Dictionary{
    constructor(){
        this.dataStore = []
    }
    add(key,val){
        this.dataStore[key] = val;
    }
    find(key){
        return this.dataStore[key]
    }
    remove(key){
        delete this.dataStore[key]
    }
    showAll(){
        let arr = Object.keys(this.dataStore).sort();
        arr.forEach(item=>{
            console.log( item +  ' => ' + this.dataStore[item])
        })
    }
    count(){
        return Object.keys(this.dataStore).length
    }
    clear(){
        let arr = Object.keys(this.dataStore);
        arr.forEach(item=>{
            delete this.dataStore[item]
        })
    }
}

module.exports = Dictionary