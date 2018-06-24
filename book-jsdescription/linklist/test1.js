const {Node, LList} = require('./index')
let llist = new LList('0')
llist.remove = function(item){
    var currNode = this.find(item);
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous; 
    this.head = currNode.next;
    console.log(currNode.element + 'has been removed', this.length()+' is remaind')
}
// llist.display()
// console.log(llist)
for(let i = 1; i<= 40 ; i++){
    llist.insert(String(i))
}

while(llist.removeByNumber(3)){

}

llist.display()