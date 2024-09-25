class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (current && count < index) {
      current = current.nextNode;
      count++;
    }

    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      return removedNode;
    }

    let current = this.head;
    while (current.nextNode !== this.tail) {
      current = current.nextNode;
    }

    const removedNode = this.tail;
    this.tail = current;
    current.nextNode = null;

    return removedNode;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let string = "";
    let current = this.head;

    while (current) {
      string += `(${current.value}) -> `;
      current = current.nextNode;
    }

    string += "null";
    return string;
  }
}
