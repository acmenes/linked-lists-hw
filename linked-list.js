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

  _verifyIdx(idx) {
    /// I have some duplicate code- can I use this to check if an index is valid?
    if (idx > this.length || idx < 0) {
      throw new Error("invalid index")
    }
  }

  /** get the node at a given index */

  _get(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null && count != idx) {
      count += 1
      current = current.next
    }

    return current
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)

    /// we need to make sure there isn't already a head
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else { 
      this.tail.next(newNode)
      this.tail = newNode
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)

    if(this.head === null ) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    if (this.lenghth === 0) {
      this.tail = this.head
    }

    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    /// use the removeAt function
    return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {
    /// use the removeAt function, this time at the beginning
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.val[idx]
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // this._verifyIdx() ??? would this work???
    
    if(idx <= 0 && idx >= this.length -1) {
     throw new Error("invalid index")
    }

    let selected = this._get(idx)
    selected.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
     // this._verifyIdx() ??? would this work???
    
    if (idx > this.length || idx < 0) {
      throw new Error("invalid index")
    }

    /// handle the index being 0
    if(idx === 0) return this.unshift(val)

    ///handle the index being the length of the list so it can go at the end
    if(idx === this.length) return this.push(val)
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
     // this._verifyIdx() ??? would this work???
    
    if (idx > this.length || idx < 0) {
      throw new Error("invalid index")
    }

    if(idx === 0) {
      return this.shift()
    } 

    if(idx === this.length) {
      return this.pop
    }

    /// I looked at the solution because I don't get this next part:
    let prev = this._get(idx - 1);
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0
    let currentNode = this.head

    while (currentNode) {
      total += currentNode.val
      currentNode = currentNode.next
    }

    return total / this.length 

  }
}

module.exports = LinkedList;
