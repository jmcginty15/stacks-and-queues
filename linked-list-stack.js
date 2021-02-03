const LinkedList = require('./linked-list');

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this._list = new LinkedList();
    }

    /** push(val): add new value to end of the stack. Returns undefined. */

    push(val) {
        this._list.unshift(val);
        this.update();
    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */

    pop() {
        if (!this.size) throw new Error('Stack is empty');
        const returnVal = this._list.shift();
        this.update();
        return returnVal;
    }

    /** peek(): return the value of the first node in the stack. */

    peek() {
        if (!this.size) return null;
        else return this.first.val;
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */

    isEmpty() {
        return !this.size;
    }

    /** update(): update stack after calling list method */

    update() {
        this.first = this._list.head;
        this.last = this._list.tail;
        this.size = this._list.length;
    }
}

module.exports = Stack;