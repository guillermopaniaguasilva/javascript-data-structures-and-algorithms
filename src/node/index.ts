class Node {
	private _next: Node | null;
	private _prev?: Node | null;

	constructor(private _value: any) {
		this._next = null;
		this._prev = null;
	}

	get value() {
		return this._value;
	}

	get next() {
		return this._next!;
	}

	get prev() {
		return this._prev;
	}

	set value(value: any) {
		this._value = value;
	}

	set next(value: Node | null) {
		this._next = value;
	}

	set prev(value: any | null) {
		this._prev = value;
	}
}

export default Node;
