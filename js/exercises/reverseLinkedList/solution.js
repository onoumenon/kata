class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new LinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;            
        }
    }

    reverse() {
        let first = this.head;
        let second = first.next;
        
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        
        this.head.next = null;
        this.head = first;
        return this.head
      }  

}

module.exports = LinkedList