import Node from '../node';

class Stack {
  private _top: Node | null;
  private _length: number;

  constructor(private _value: any) {
    this._top = new Node(_value);
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
    if (this._length === 0) {
      this._top = newNode;
    } else {
      newNode.next = this._top;
      this._top = newNode;
    }
    this._length++;
    return this;
  }

  pop() {
    if (this._length === 0) return undefined;
    const temp = this._top;
    this._top = this._top?.next;
    temp?.next = null;
    this._length--;
    return temp;
  }
}

export default Stack;
