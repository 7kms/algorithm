class Node {
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show(){
        console.log(this.data);
        return this.data;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(data){
        let node = new Node(data)
        if(!this.root){
            this.root = node;
        }else{
            let current = this.root;
            while(true){
                if(node.data < current.data){
                    if(current.left == null){
                        current.left = node;
                        break;
                    }
                    current = current.left;
                }else{
                    if(current.right == null){
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
            
        }
    }
    getMin(node){
        let current = node || this.root;
        while(current.left != null){
            current = current.left;
        }
        return current.data
    }
    getMax(node){
        let current = node || this.root;
        while(current.right != null){
            current = current.right;
        }
        return current.data
    }
    getMaximumNode(node){
        if(node.right == null){
            return node;
        }else{
            return this.getMaxistNode(node.left)
        } 
    }
    getMinimumNode(node){
        if(node.left == null){
            return node;
        }else{
            return this.getSmallestNode(node.left)
        }
    }
    find(data){
        let current = this.root;
        while(current != null){
            if(data == current.data){
                return current;
            }else if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return null;
    }
    remove(data){
        this.removeNode(this.root,data)
    }
    removeNode(node,data){
        if(node== null){
            return node;
        }
        if(node.data == data){
            if(node.left == null && node.right == null){
                return null;
            }
            if(node.left == null){
                return node.right;
            }
            if(node.right == null){
                return node.left;
            }
            //被删除的节点还有左右子节点,
            //1.取左子树最大值
            let tempNode = this.getMaximumNode(node.left)
            node.data = tempNode.data;
            node.left = this.removeNode(node.left,tempNode.data);
            return node;
            //2.取右子树最小值
            // let tempNode = this.getMinimumNode(node.right)
            // node.data = tempNode.data;
            // node.right = this.removeNode(node.right,tempNode.data);
            // return node;
        }else if(node.data < data){
            node.left = this.removeNode(node.left, data)
            return node
        }else{
            node.right = this.removeNode(node.right, data)
            return node
        }
    }
}

//中序遍历(左子树=>根节点=>右子树)
BST.inOrder = (node)=>{
    if(!node){
        return false;
    }
    BST.inOrder(node.left);
    node.show();
    BST.inOrder(node.right);
}

//先序遍历(根节点=>左子树=>又子树)
BST.preOrder = (node)=>{
    if(!node)return false;
    node.show();
    BST.preOrder(node.left);
    BST.preOrder(node.right);

}

//后序遍历(叶子节点,左子树=>又子树=>根节点)

BST.postOrder = (node)=>{
    if(!node)return false;
    BST.postOrder(node.left)
    BST.postOrder(node.right)
    node.show()
}




let test = ()=>{
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    console.log('中序遍历')
    BST.inOrder(nums.root)
    console.log('先序遍历')
    BST.preOrder(nums.root)
    console.log('后序遍历')
    BST.postOrder(nums.root)
}
test()