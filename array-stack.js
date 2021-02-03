/** Node: node for a stack. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Stack: chained-together nodes where you can
*  remove from the top or add to the top. */

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this._list = [];
    }

    /** push(val): add new value to end of the stack. Returns undefined. */

    push(val) {
        this._list.push(val);
        this.size += 1;
        const newNode = new Node(val);
        this.first = newNode;
        if (this.size === 1) this.last = newNode;
    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */

    pop() {
        if (!this.size) throw new Error('Stack is empty');
        const returnVal = this._list.pop();
        this.size -= 1;
        this.first = new Node(this._list[this._list.length - 1]);
        return returnVal;
    }

    /** peek(): return the value of the first node in the stack. */

    peek() {
        if (!this.size) return null;
        else return this._list[this._list.length - 1];
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */

    isEmpty() {
        return !this.size;
    }
}

module.exports = Stack;