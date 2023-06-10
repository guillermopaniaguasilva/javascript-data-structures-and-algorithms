import Node from '../node';

class LinkedList {
	private _head: Node | null;
	private _tail: Node | null;
	private _length: number;

	constructor(private value: any) {
		this._head = new Node(value);
		this._tail = this._head;
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

	/**
	 * Appends a value to the end of the linked list.
	 * @param value {any} - value to be appended.
	 * @returns this instance of the linked list.
	 */
	push(value: any) {
		const newNode = new Node(value);
		if (!this._head) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			this._tail!.next = newNode;
			this._tail = newNode;
		}
		this._length++;
		return this;
	}

	/**
	 * Removes the last element of the linked list.
	 * @returns removed element.
	 */
	pop() {
		if (!this._head) return undefined;

		let temp = this._head;
		let prev = this._head;
		while (temp.next) {
			prev = temp;
			temp = temp.next;
		}
		this._tail = prev;
		this._tail.next = null;
		this._length--;

		if (this._length === 0) {
			this._head = null;
			this._tail = null;
		}

		return temp;
	}

	/**
	 * Appends a value to the beginning of the linked list.
	 * @param value {any} - value to be appended.
	 * @returns this instance of the linked list.
	 */
	unshift(value: any) {
		const newNode = new Node(value);
		if (!this._head) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			newNode.next = this._head;
			this._head = newNode;
		}
		this._length++;
		return this;
	}

	/**
	 * Removes the first element of the linked list.
	 * @returns removed element.
	 */
	shift() {
		if (!this._head) return undefined;

		let temp = this._head;
		this._head = this._head.next;
		temp.next = null;
		this._length--;
		if (this._length === 0) {
			this._tail = null;
		}

		return temp;
	}

	/**
	 * Retrieves an element by its position in the linked list.
	 * @param index {number} - index of element to retrieve.
	 * @returns Node | undefined
	 */
	get(index: number) {
		if (index < 0 || index >= this._length) return undefined;

		let temp = this._head;
		for (let i = 0; i < index; i++) {
			temp = temp!.next;
		}
		return temp;
	}

	/**
	 * @param index {number} - index of element the value of which is to be modified.
	 * @param value {any} - value of the element to be modified.
	 */
	set(index: number, value: any) {
		const temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}

	/**
	 * @param index {number} - place of the element to be inserted.
	 * @param value {any} - element to be inserted.
	 */
	insert(index: number, value: any) {
		if (index === 0) return this.unshift(value);

		if (index === this._length) return this.push(value);

		if (index < 0 || index > this._length) return false;

		const newNode = new Node(value);
		const temp = this.get(index - 1);

		newNode.next = temp!.next;
		temp!.next = newNode;

		this._length++;
		return true;
	}

	/**
	 * @param index {number} - index of the element to be removed.
	 */
	remove(index: number) {
		if (index === 0) return this.shift();

		if (index === this._length - 1) return this.pop();

		if (index < 0 || index >= this._length) return undefined;

		const before = this.get(index - 1);
		const temp = before!.next;

		before!.next = temp!.next;
		temp!.next = null;
		this._length--;
		return temp;
	}

	/**
	 * Reverses this instance of the linked list.
	 */
	reverse() {
		let temp = this._head;
		this._head = this._tail;
		this._tail = temp;
		let next = temp!.next;
		let prev = null;
		for (let i = 0; i < this._length; i++) {
			next = temp!.next;
			temp!.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}
}

export default LinkedList;
