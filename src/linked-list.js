const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      const node = new Node(data);
      if (!this._head) this._head = node;
      if (this._tail) {
        this._tail.next = node;
        node.prev = this._tail;
      }
      this._tail = node;
      this.length++;
    }

    head() {
      if (!this._head) return null;
      return this._head.data;
    }

    tail() {
      if (!this._tail) return null;
      return this._tail.data;
    }

    at(index) {
      var node = this._head;
      for (var i = 0; i < index; i++) {
        node = node.next;
      }
    return node.data;
    }

    insertAt(index, data) {
      var node = this.nodeAt(index);
      const insertingNode = new Node(data, node.prev, node);
      node.prev.next = insertingNode;
      node.prev = insertingNode;
      this.length++;
      if (this._head === node) this._head = insertingNode;
      if (this._tail === node) this._tail = insertingNode;
    }

    isEmpty() {
      return this.length === 0;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;

    }

    deleteAt(index) {
      var node = this.nodeAt(index);
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.length--;
    }

    reverse() {
      let node = this._head;
      while (node) {
        let nextNode = node.next;
        node.next = node.prev;
        node.prev = nextNode;
        node = nextNode;
      }
      node = this._head;
      this._head = this._tail;
      this._tail = node;
    }

    indexOf(data) {
      let node = this._head;
      let i = 0;
      while (node) {
        if (node.data === data) {
          return i;
          break;
        }
        node = node.next;
        i++;
      }
      return -1;
    }

    nodeAt(index) {
      var node = this._head;
      for (var i = 0; i < index; i++) {
        node = node.next;
      }
    return node;
    }
}

module.exports = LinkedList;
