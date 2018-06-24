class Node {
    constructor(element){
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class LList {
    constructor(element = 'head'){
        this.head = new Node(element); 
        this.head.previous = this.head;
        this.head.next = this.head;
    }
    find(item){
        var currNode = this.head;
        while (currNode.element != item) {
           currNode = currNode.next;
        }
        return currNode;
    }
    findPrevious(item){
        var currentNode = this.head;
        while (currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    findLast(){
        var currNode = this.head;
        while (currNode.next != this.head) {
           currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item ){
        if(!item){
            item = this.findLast();
        }
        var newNode = new Node(newElement); 
        var current = this.find(item.element); 
        newNode.next = current.next; 
        newNode.previous = current;
        current.next = newNode;
    }
    remove(item){
        var currNode = this.find(item);
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous; 
        if(currNode == this.head){
            this.head = currNode.next;
        }else{
            currNode.previous = null;
            currNode.next = null;
        }
        console.log(currNode.element + 'has been removed')
    }
    removeByNumber(number){
        var currNode = this.head;
        var num = 1;
        if(this.length() < number){
            return false;
        }
        while (num < number) {
            currNode = currNode.next;
            num ++;
        }
        this.remove(currNode.element);
        return true;
    }
    display(){
        var currentNode = this.head;
        let str = ''
        str += currentNode.element + ' '
        // console.log(currentNode.element)
        while(currentNode.next && currentNode.next != this.head){
            // console.log(currentNode.next.element)
            str += currentNode.next.element + ' '
            currentNode = currentNode.next;
        }
        console.log(str)
    }
    dispReverse(){
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
    length(){
        var currNode = this.head;
        var num = 1;
        while (currNode.next != this.head) {
            currNode = currNode.next;
            num ++;
        }
        return num
    }
}

module.exports = {
    Node,
    LList
}