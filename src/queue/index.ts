import Node from '../node';

class Queue {
  private _first: Node | null;
  private _last: Node | null;
  private _length: number;

  constructor(value: any) {
    const newNode = new Node(value);
    this._first = newNode;
    this._last = newNode;
    this._length = 1;
  }

  enqueue(value: any) {
    const newNode = new Node(value);
    if (this._length === 0) {
      this._first = newNode;
      this._last = newNode;
    } else {
      this._last?.next = newNode;
      this._last = newNode;
    }
    this._length++;
    return this;
  }

  dequeue() {
    if (this._length === 0) return undefined;
    const temp = this._first;
    if (this._length === 1) {
      this._first = null;
      this._last = null;
    } else {
      this._first = this._first?.next;
      temp?.next = null;
    }
    this._length--;
    return temp;
  }
}

export default Queue;
