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
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      var node = this._head;
      for (var i = 0; i < index; i++) {
        node = node.next;
      }
    return node.data;
    }

    insertAt(index, data) {}

    isEmpty() {
      return this.length === 0;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;

    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
