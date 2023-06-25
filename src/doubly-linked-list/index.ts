import Node from "../node";

class DoublyLinkedList {
  private _head: Node | null;
  private _tail: Node | null;
  private _length: number;

  constructor(value: any) {
    const newNode = new Node(value);
    this._head = newNode;
    this._tail = newNode;
    this._length = 1;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  get length() {
    return this._length;
  }

  push(value: any) {
    const newNode = new Node(value);
    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail!.next = newNode;
      newNode.prev = this.tail;
      this._tail = newNode;
    }
    this._length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._tail = this._tail!.prev;
      this._tail!.next = null;
      temp!.prev = null;
    }
    this._length--;
    return temp;
  }

  unshift(value: any) {
    const newNode = new Node(value);
    if (this._length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.next = this._head;
      this._head!.prev = newNode;
      this._head = newNode;
    }
    this._length++;
    return this;
  }

  shift() {
    if (this._length === 0) return undefined;
    let temp = this._head;
    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._head = this._head!.next;
      this._head!.prev = null;
      temp!.next = null;
    }
    this._length--;
    return temp;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this._head;
    if (index < this._length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp!.next;
      }
    } else {
      temp = this._tail;
      for (let i = this._length - 1; i > index; i--) {
        temp = temp!.prev;
      }
    }
    return temp;
  }

  set(index: number, value: any) {
    const temp = this.get(index);
    if (temp !== null && temp !== undefined) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: any) {
    if (index === 0) return this.unshift(value);
    if (index === this._length) return this.push(value);
    if (index < 0 || index > this._length) return false;

    const newNode = new Node(value);
    const before = this.get(index - 1);

    if (before !== null && before !== undefined) {
      const after = before.next;
      before.next = newNode;
      newNode.prev = before;
      newNode.next = after;

      if (after !== null) {
        after.prev = newNode;
      }
    }
    this._length++;
    return true;
  }

  remove(index: number) {
    if (index === 0) return this.shift();
    if (index === this._length - 1) return this.pop();
    if (index < 0 || index > this._length) return undefined;

    const temp = this.get(index);

    if (temp !== null && temp !== undefined) {
      temp.prev!.next = temp.next;
      temp.next!.prev = temp.prev;
      temp.next = null;
      temp.prev = null;
    }

    this._length--;
    return temp;
  }
}

export default DoublyLinkedList;
