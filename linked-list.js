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
        let newNode = new Node(val);
        if (this.head === null) this.head = newNode;
        if (this.tail !== null) this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
        let newNode = new Node(val);
        if (this.head !== null) 
            newNode.next = this.head;
        else
            this.tail = newNode;
        this.head = newNode;
        this.length++;
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
        let removedNode = this.tail;
        let newLastNode;
        let current = this.head;
        while (current.next !== null){
            newLastNode = current;
            current = current.next;
        }
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--;
        return removedNode;
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
        let removedNode = this.head;
        if (this.head === this.tail) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = this.head.next;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
        let current = this.head;
        for (let i=0; i<idx; i++){
            current = current.next;
        }
        return current;
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
        let current = this.head;
        for (let i=0; i<idx; i++){
            current = current.next;
        }
        current.val = val
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
        if 
            (idx === 0) this.unshift(val)
        else {
            let newNode = new Node(val)
            let current = this.head;
            for (let i=0; i<idx; i++){
                current = current.next;
            }
            if (current.next !== null) newNode = current.next;
            current.next = newNode;
            this.length++;
        }
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
        if (idx === 0) 
            this.shift()
        else {
            let prevNode;
            let current = this.head;
            for (let i=0; i<idx; i++){
                prevNode = current;
                current = current.next;
            }
            let removedNode = current;
            prevNode.next = prevNode.next.next;
            this.length--;
            return removedNode;
        }
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
        let current = this.head;
        let sum = current.val;
        let count = 1;
        while (current.next !== null){
            current = current.next;
            sum += current.val;
            count++;
        }
        return sum/count;
    }
  }
  
  module.exports = LinkedList;
  