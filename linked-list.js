/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = new Node(val);
    } else if (this.length === 1) {
      this.tail = new Node(val);
      this.head.next = this.tail;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.length === 0) this.push(val);
    else {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    try {
      if (this.length === 0) throw 'List is empty';
      if (this.length === 1) {
        const returnNode = this.head;
        this.head = null;
        this.tail = null;
        this.length -= 1;
        return returnNode.val;
      }
      let currentNode = this.head;
      while (currentNode.next != this.tail) currentNode = currentNode.next;
      this.tail = currentNode;
      this.length -= 1;
      return currentNode.next.val;
    } catch (err) {
      console.log(err);
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    try {
      if (this.length === 0) throw 'List is empty';
      if (this.length === 1) return this.pop();
      const returnNode = this.head;
      this.head = this.head.next;
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
      let currentNode = this.head;
      let i = 0;
      while (i < idx) {
        currentNode = currentNode.next;
        i += 1;
      }
      return currentNode.val;
    } catch (err) {
      console.log(err);
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try {
      if (this.length - 1 < idx) throw 'Invalid index';
      let currentNode = this.head;
      let i = 0;
      while (i < idx) {
        currentNode = currentNode.next;
        i += 1;
      }
      currentNode.val = val;
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
        let currentNode = this.head;
        let prevNode = null;
        let i = 0;
        while (i < idx) {
          prevNode = currentNode;
          currentNode = currentNode.next;
          i += 1;
        }
        const newNode = new Node(val);
        newNode.next = currentNode;
        prevNode.next = newNode;
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
        let currentNode = this.head;
        let prevNode = null;
        let i = 0;
        while (i < idx) {
          prevNode = currentNode;
          currentNode = currentNode.next;
          i += 1;
        }
        prevNode.next = currentNode.next;
        this.length -= 1;
        return currentNode.val;
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
      let prev = null;
      while (currentNode) {
        const next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
      }
      this.head = tail;
      this.tail = head;
    }
  }

  /** pivot(n): pivot the list around the value n */

  pivot(n) {
    const firstHalf = new LinkedList();
    const secondHalf = new LinkedList();

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

module.exports = LinkedList;
