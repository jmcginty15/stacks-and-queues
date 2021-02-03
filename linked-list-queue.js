const LinkedList = require('./linked-list');

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this._list = new LinkedList();
    }

    /** enqueue(val): add new value to end of the queue. Returns undefined. */

    enqueue(val) {
        this._list.push(val);
        this.update();
    }

    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */

    dequeue() {
        if (!this.size) throw new Error('Queue is empty');
        const returnVal = this._list.shift();
        this.update();
        return returnVal;
    }

    /** peek(): return the value of the first node in the queue. */

    peek() {
        if (!this.size) return null;
        else return this.first.val;
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */

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

module.exports = Queue;
