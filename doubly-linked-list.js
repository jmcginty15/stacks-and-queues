/** DoubleNode: node for a doubly linked list. */

class DoubleNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        if (this.length === 0) {
            this.head = new DoubleNode(val);
            this.tail = new DoubleNode(val);
        } else if (this.length === 1) {
            this.tail = new DoubleNode(val);
            this.head.next = this.tail;
            this.tail.prev = this.head;
        } else {
            const newNode = new DoubleNode(val);
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        if (this.length === 0) {
            this.push(val);
        } else {
            const newNode = new DoubleNode(val);
            newNode.next = this.head;
            this.head.prev = newNode;
            if (this.length === 1) this.tail = this.head;
            this.head = newNode;
            this.length += 1;
        }
    }

    /** pop(): return & remove last item. */

    pop() {
        try {
            if (this.length === 0) throw 'List is empty';
            const returnNode = this.tail;
            this.tail = this.tail.prev;
            if (this.tail) this.tail.next = null;
            else this.head = null;
            this.length -= 1;
            return returnNode.val;
        } catch (err) {
            console.log(err);
        }
    }

    /** shift(): return & remove first item. */

    shift() {
        try {
            if (this.length === 0) throw 'List is empty';
            const returnNode = this.head;
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
            this.length -= 1;
            return returnNode.val;
        } catch (err) {
            console.log(err);
        }
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        try {
            if (this.length - 1 < idx) throw 'Invalid index';
            if (this.length - 1 - idx < idx) {
                let currentNode = this.tail;
                let i = this.length - 1;
                while (i > idx) {
                    currentNode = currentNode.prev;
                    i -= 1;
                }
                return currentNode.val;
            } else {
                let currentNode = this.head;
                let i = 0;
                while (i < idx) {
                    currentNode = currentNode.next;
                    i += 1;
                }
                return currentNode.val;
            }
        } catch (err) {
            console.log(err);
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        try {
            if (this.length - 1 < idx) throw 'Invalid index';
            if (this.length - 1 - idx < idx) {
                let currentNode = this.tail;
                let i = this.length - 1;
                while (i > idx) {
                    currentNode = currentNode.prev;
                    i -= 1;
                }
                currentNode.val = val;
            } else {
                let currentNode = this.head;
                let i = 0;
                while (i < idx) {
                    currentNode = currentNode.next;
                    i += 1;
                }
                currentNode.val = val;
            }
        } catch (err) {
            console.log(err);
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        try {
            if (this.length < idx) throw 'Invalid index';
            if (idx === this.length) this.push(val);
            else if (idx === 0) this.unshift(val);
            else {
                if (this.length - idx < idx) {
                    let currentNode = this.tail;
                    let nextNode = null;
                    let i = this.length;
                    while (i > idx) {
                        nextNode = currentNode;
                        currentNode = currentNode.prev;
                        i -= 1;
                    }
                    const newNode = new DoubleNode(val);
                    newNode.prev = currentNode;
                    newNode.next = nextNode;
                    currentNode.next = newNode;
                    nextNode.prev = newNode;
                } else {
                    let currentNode = this.head;
                    let prevNode = null;
                    let i = 0;
                    while (i < idx) {
                        prevNode = currentNode;
                        currentNode = currentNode.next;
                        i += 1;
                    }
                    const newNode = new DoubleNode(val);
                    newNode.next = currentNode;
                    newNode.prev = prevNode;
                    prevNode.next = newNode;
                    currentNode.prev = newNode;
                }
                this.length += 1;
            }
        } catch (err) {
            console.log(err);
        }
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        try {
            if (this.length - 1 < idx) throw 'Invalid index';
            if (idx === this.length - 1) return this.pop();
            if (idx === 0) return this.shift();
            else {
                if (this.length - 1 - idx < idx) {
                    let currentNode = this.tail;
                    let nextNode = null;
                    let i = this.length - 1;
                    while (i > idx) {
                        nextNode = currentNode;
                        currentNode = currentNode.prev;
                        i -= 1;
                    }
                    nextNode.prev = currentNode.prev;
                    currentNode.prev.next = nextNode;
                    this.length -= 1;
                    return currentNode.val;
                } else {
                    let currentNode = this.head;
                    let prevNode = null;
                    let i = 0;
                    while (i < idx) {
                        prevNode = currentNode;
                        currentNode = currentNode.next;
                        i += 1;
                    }
                    prevNode.next = currentNode.next;
                    currentNode.next.prev = prevNode;
                    this.length -= 1;
                    return currentNode.val;
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    /** average(): return an average of all values in the list */

    average() {
        let sum = 0;
        let count = 0;
        let currentNode = this.head;
        if (!currentNode) return 0;
        while (currentNode) {
            sum += currentNode.val;
            count += 1;
            currentNode = currentNode.next;
        }
        return sum / count;
    }

    /** reverse(): reverse the order of the list in place */

    reverse() {
        if (this.length > 1) {
            const head = this.head;
            const tail = this.tail;
            let currentNode = head;
            while (currentNode) {
                const next = currentNode.next;
                const prev = currentNode.prev;
                currentNode.next = prev;
                currentNode.prev = next;
                currentNode = next;
            }
            this.head = tail;
            this.tail = head;
        }
    }

    /** pivot(n): pivot the list around the value n */

    pivot(n) {
        const firstHalf = new DoublyLinkedList();
        const secondHalf = new DoublyLinkedList();

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.val < n) firstHalf.push(currentNode.val);
            else secondHalf.push(currentNode.val);
            currentNode = currentNode.next;
        }

        currentNode = secondHalf.head;
        while (currentNode) {
            firstHalf.push(currentNode.val);
            currentNode = currentNode.next;
        }

        this.head = firstHalf.head;
        this.tail = firstHalf.tail;
    }
}

module.exports = DoublyLinkedList;
