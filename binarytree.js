class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    let parent = null;

    while (true) {
      if (value < current.value) {
        parent = current;
        current = current.left;
        if (!current) {
          parent.left = newNode;
          return;
        }
      } else if (value > current.value) {
        parent = current;
        current = current.right;
        if (!current) {
          parent.right = newNode;
          return;
        }
      } else {
        return; // Value already exists
      }
    }
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return null;
  }

  // ... other operations like delete, findMin, findMax, etc.
}
