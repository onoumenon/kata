class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
        } else {
            let current = this.root
            while (current) {
                if (data === current.data) {
                    break
                }
                if (data < current.data) {
                    if (!current.left) {
                    current.left = newNode;
                    break;
                    } else {
                    current = current.left;
                    }
                } else if (data > current.data) {
                    if (!current.right) {
                    current.right = newNode;
                    break;
                    } else {
                    current = current.right;
                    }
                }
            }

        }
    }

    findMaxDepth(root=this.root) {
        if (root === null){
            return 0
        }
        return (Math.max(this.findMaxDepth(root.left), this.findMaxDepth(root.right))+1)
    }
}

module.exports = BinaryTree