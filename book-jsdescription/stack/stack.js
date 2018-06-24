class Stack{
    constructor(){
        this.dataStore = [];
        this.top = 0;
    }
    push(element){
        this.dataStore[this.top++] = element
    }
    pop(){
        return this.dataStore[--this.top]
    }
    //peek() 方法返回数组的第 top-1 个位置的元素，即栈顶元素:
    peek(){
        return this.dataStore[this.top-1]
    }
    clear(){
        this.top = 0;
    }
    length(){
        return this.top;
    }
}

module.exports = Stack;