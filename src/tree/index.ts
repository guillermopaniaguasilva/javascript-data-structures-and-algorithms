//  @ts-ignore
class Node {
  private _left?: Node | null;
  private _right?: Node | null;

  constructor(private _value: any) {
    this._left = null;
    this._right = null;
  }

  get value() {
    return this._value;
  }

  get left(): Node | null | undefined {
    return this._left;
  }

  get right(): Node | null | undefined {
    return this._right;
  }

  set value(value: any) {
    this._value = value;
  }

  set left(value: Node | null) {
    this._left = value;
  }

  set right(value: Node | null) {
    this._right = value;
  }
}

class BinarySearchTree {
  private _root: Node | null;

  constructor() {
    this._root = null;
  }

  get root() {
    return this._root;
  }

  insert(value: any) {
    const newNode = new Node(value);
    if (this._root === null) {
      this._root = newNode;
      return this;
    }
    let temp = this._root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        if (temp.left) temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        if (temp.right) temp = temp.right;
      }
    }
  }

  contains(value: any) {
    if (this._root === null) return false;
    let temp = this._root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left!;
      } else if (value > temp.value) {
        temp = temp.right!;
      } else {
        return true;
      }
    }
    return false;
  }

  minimum(currentNode: Node) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left!;
    }
    return currentNode;
  }
}

export default BinarySearchTree;
