class MyArray {
  constructor(value) {
    this.data = {};
    this.length = 0;
    if (value !== undefined) {
      this.push(value);
    }
  }

  // Get an item with the index O(1)
  get(index) {
    return this.data[index];
  }

  // Add an item at the end of the array O(1)
  push(value) {
    const targetIndex = this.length;
    this.data[targetIndex] = value;
    this.length++;

    return this.data[targetIndex];
  }

  // Remove the last item from the array O(1)
  pop() {
    const targetIndex = this.length - 1;
    const targetData = this.data[targetIndex];
    delete this.data[targetIndex];
    this.length--;

    return targetData;
  }

  // Add an item at the begaining of the array O(n)
  unshift(value) {
    const shifted = {};
    shifted[0] = value;
    for (let key in this.data) {
      shifted[Number(key) + 1] = this.data[key];
    }
    this.data = shifted;
    this.length++;

    return value;
  }

  // Remove the first item from the begaining of the array O(n)
  shift() {
    const shifted = {};
    const targetData = this.data[0];

    for (let key in this.data) {
      const convertedKey = Number(key);
      if (convertedKey !== 0) {
        shifted[Number(key) - 1] = this.data[key];
      }
    }

    this.data = shifted;

    return targetData;
  }

  // Incerts an item at the given index O(n)
  incert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newArray = {};
    for (let key in this.data) {
      const convertedKey = Number(key);

      if (convertedKey < index)
        newArray[convertedKey] = this.data[convertedKey];

      if (convertedKey >= index)
        newArray[convertedKey + 1] = this.data[convertedKey];
    }
    newArray[index] = value;
    this.length++;
    this.data = newArray;
  }

  //  Removes item with the given index O(n)
  remove(index) {
    if (index === this.length - 1) return this.pop();

    for (let i = 0; i < this.length; i++) {
      if (i >= index) this.data[i] = this.data[i + 1];
    }
    this.pop();
  }
}

module.exports = MyArray;
