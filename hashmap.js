class HashMap {
  constructor() {
    this.size = 10; // Initial size of the hash table
    this.storage = new Array(this.size);
  }

  hash(key) {
    // A simple hash function for demonstration
    return key.charCodeAt(0) % this.size;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.storage[index]) {
      this.storage[index] = [];
    }

    this.storage[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);

    if (!this.storage[index]) {
      return null;
    }

    for (const [k, v] of this.storage[index]) {
      if (k === key) {
        return v;
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);

    if (!this.storage[index]) {
      return false;
    }

    for (const [k, v] of this.storage[index]) {
      if (k === key) {
        return true;
      }
    }

    return false;
  }

  delete(key) {
    const index = this.hash(key);

    if (!this.storage[index]) {
      return false;
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      const [k, v] = this.storage[index][i];
      if (k === key) {
        this.storage[index].splice(i, 1);
        return true;
      }
    }

    return false;
  }
}
