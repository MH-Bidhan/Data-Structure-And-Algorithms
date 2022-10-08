class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (value) this.prepend(value);
  }

  // Prints the value of each node of the linked list O(n)
  printList() {
    const printList = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      printList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return printList;
  }

  //  Traverse through the list and returns the node of the given index O(n)
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // Adds a node to the tail of the linked list O(1)
  append(value) {
    const newNode = new Node(value);

    if (!this.length) return this.prepend(value);

    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // Adds a node to the head of the linked list O(1)
  prepend(value) {
    const newNode = new Node(value);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  // Adds a node to the given index of the linked list O(n)
  insert(index, value) {
    const newNode = new Node(value);

    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const leader = this.traverseToIndex(index - 1);
    const pointer = leader.next;

    leader.next = newNode;
    newNode.next = pointer;
    this.length++;

    return this;
  }

  // Removes the node of the given index from the list O(n)
  remove(index) {
    if (index >= this.length || index < 0) return "Invalid index";

    this.length--;

    if (index === 0) {
      const pointer = this.head.next;
      pointer.prev = null;
      this.head = pointer;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const target = leader.next;
    const pointer = target.next;

    leader.next = pointer;
  }

  // Revese the order of the linked list O(n)
  reverse() {
    if (this.length === 1) return this;

    let currentNode = this.head;

    let reversed = null;
    const tail = new Node(this.head.value);

    while (currentNode !== null) {
      const newNode = new Node(currentNode.value);
      newNode.next = reversed;
      reversed = newNode;
      currentNode = currentNode.next;
    }
    this.head = reversed;
    this.tail = tail;
  }
}

module.exports = LinkedList;
