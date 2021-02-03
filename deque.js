const DoublyLinkedList = require('./doubly-linked-list');

/** Deque: chained-together nodes where you can
 *  remove from the front or back and add to the front or back. */

class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this._list = new DoublyLinkedList();
    }

    /** push(val): add new value to end of the deque. Returns undefined. */

    push(val) {
        this._list.push(val);
        this.update();
    }

    /** pop(): remove the node from the end of the deque
     * and return its value. Should throw an error if the deque is empty. */

    pop() {
        if (!this.size) throw new Error('Deque is empty');
        const returnVal = this._list.pop();
        this.update();
        return returnVal;
    }

    /** unshift(val): add new value to beginning of the deque. Returns undefined. */

    unshift(val) {
        this._list.unshift(val);
        this.update();
    }

    /** shift(): remove the node from the beginning of the deque
     * and return its value. Should throw an error if the deque is empty. */

    shift() {
        if (!this.size) throw new Error('Deque is empty');
        const returnVal = this._list.shift();
        this.update();
        return returnVal;
    }

    /** peekRight(): return the value of the last node in the deque. */

    peekRight() {
        if (!this.size) return null;
        else return this.last.val;
    }

    /** peekLeft(): return the value of the first node in the deque. */

    peekLeft() {
        if (!this.size) return null;
        else return this.first.val;
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */

    isEmpty() {
        return !this.size;
    }

    /** update(): update deque after calling list method */

    update() {
        this.first = this._list.head;
        this.last = this._list.tail;
        this.size = this._list.length;
    }
}

module.exports = Deque;