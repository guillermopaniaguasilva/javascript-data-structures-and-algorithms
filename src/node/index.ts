class Node {
	private _next: Node | null;

	constructor(private _value: any) {
		this._next = null;
	}

	get value() {
		return this._value;
	}

	get next() {
		return this._next!;
	}

	set value(value: any) {
		this._value = value;
	}

	set next(value: Node | null) {
		this._next = value;
	}
}

export default Node;
