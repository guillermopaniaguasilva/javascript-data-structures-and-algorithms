import LinkedList from '..';

describe('LinkedList', () => {
	let list: LinkedList;

	beforeEach(() => {
		list = new LinkedList(1);
	});

	describe('Initial State', () => {
		test('LinkedList class should have push, pop, unshift, shift, get, set, insert, remove and reverse methods', () => {
			expect(list.push).not.toBeNull();
			expect(list.pop).not.toBeNull();
			expect(list.unshift).not.toBeNull();
			expect(list.shift).not.toBeNull();
			expect(list.get).not.toBeNull();
			expect(list.set).not.toBeNull();
			expect(list.insert).not.toBeNull();
			expect(list.remove).not.toBeNull();
			expect(list.reverse).not.toBeNull();
		});

		test('new LinkedList should have same head and tail', () => {
			expect(list.head?.value).toBe(1);
			expect(list.tail?.value).toBe(1);
		});

		test('new LinkedList should have length of 1', () => {
			expect(list.length).toBe(1);
		});
	});

	describe('Push Method', () => {
		test('it should add value to end of LinkedList', () => {
			expect(list.tail?.value).toBe(1);
			list.push(2);
			expect(list.tail?.value).toBe(2);
		});

		test('it should add value to head when LinkedList is empty', () => {
			list.pop();
			expect(list.head).toBeNull();
			list.push(2);
			expect(list.head?.value).toBe(2);
		});

		test('it should increase length by 1', () => {
			const initialLength = list.length;
			list.push(2);
			expect(list.length).toBe(initialLength + 1);
		});

		test('it should return this instance of LinkedList', () => {
			expect(list.push(2)).toBe(list);
		});
	});

	describe('Pop Method', () => {
		test('it should remove last element and return it', () => {
			const removedItem = list.pop();

			expect(list.tail).toBeNull();
			expect(removedItem).toHaveProperty('value', 1);
		});

		test('it should set new tail to have null as next', () => {
			list.push(2);
			list.push(3);
			list.pop();

			expect(list.tail?.next).toBeNull();
		});

		test('it should decrease length by 1', () => {
			const initialLength = list.length;
			list.pop();
			expect(list.length).toBe(initialLength - 1);
		});

		test('it should set head and tail to null when LinkedList ends empty', () => {
			list.pop();
			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
		});
	});

	describe('Unshift Method', () => {
		test('it should insert an element at the beginning of the LinkedList', () => {
			list.unshift(2);
			expect(list.head?.value).toBe(2);
			expect(list.tail?.value).toBe(1);
		});

		test('it should increase length by 1', () => {
			const initialLength = list.length;
			list.unshift(2);
			expect(list.length).toBe(initialLength + 1);
		});

		test('it should return this instance of LinkedList', () => {
			expect(list.unshift(2)).toBe(list);
		});

		test('it should point the head and the tail to the added element when the LinkedList is empty', () => {
			list.pop();
			list.unshift(2);
			expect(list.head?.value).toBe(2);
			expect(list.tail?.value).toBe(2);
		});
	});

	describe('Shift Method', () => {
		test('it should return undefined when trying to shift an empty LinkedList', () => {
			list.pop();
			expect(list.shift()).toBeUndefined();
		});

		test('it should remove the first element', () => {
			list.push(2);
			list.shift();
			expect(list.head?.value).toBe(2);
			expect(list.tail?.value).toBe(2);
		});

		test('it should decrease length by 1', () => {
			const initialLength = list.length;
			list.shift();
			expect(list.length).toBe(initialLength - 1);
		});

		test('it should return removed item', () => {
			expect(list.shift()).toHaveProperty('value', 1);
		});
	});

	describe('Get Method', () => {
		test('it should retrieve an element by index', () => {
			expect(list.get(0)?.value).toBe(1);
		});

		test('it should return undefined when the requested index is out of bounds', () => {
			expect(list.get(-1)).toBeUndefined();
			expect(list.get(1)).toBeUndefined();
		});
	});

	describe('Set Method', () => {
		test('it should change the value of an element in the LinkedList', () => {
			expect(list.set(0, 2)).toBeTruthy();
			expect(list.get(0)?.value).toBe(2);
		});

		test('it should return undefined when the requested index is out of bounds', () => {
			expect(list.set(-1, 2)).toBeFalsy();
			expect(list.set(1, 2)).toBeFalsy();
		});
	});

	describe('Insert Method', () => {
		test('it should insert element at the beginning if index is 0', () => {
			expect(list.insert(0, 2)).toBe(list);
			expect(list.head?.value).toBe(2);
		});

		test('it should insert element at the end if index equals length of LinkedList', () => {
			expect(list.insert(1, 2)).toBe(list);
			expect(list.tail?.value).toBe(2);
		});

		test('it should return false if index is out of bounds', () => {
			expect(list.insert(-1, 2)).toBeFalsy();
			expect(list.insert(2, 2)).toBeFalsy();
		});

		test('it should increase length by 1 if operation is successful', () => {
			const initialLength = list.length;
			list.insert(0, 2);
			expect(list.length).toBe(initialLength + 1);
		});

		test('it should return true if operation is successful', () => {
			expect(list.insert(0, 2)).toBeTruthy();
		});
	});

	describe('Remove Method', () => {
		test('it should remove element from the beginning if index is 0', () => {
			list.push(2);
			expect(list.remove(0)).toHaveProperty('value', 1);
			expect(list.head?.value).toBe(2);
		});

		test('it should remove element from the end if index equals length of LinkedList - 1', () => {
			list.push(2);
			expect(list.remove(list.length - 1)).toHaveProperty('value', 2);
			expect(list.tail?.value).toBe(1);
		});

		test('it should return undefined if index is out of bounds', () => {
			expect(list.remove(-1)).toBeUndefined();
			expect(list.remove(2)).toBeUndefined();
		});

		test('it should decrease length by 1', () => {
			const initialLength = list.length;
			list.remove(0);
			expect(list.length).toBe(initialLength - 1);
		});

		test('it should return removed element', () => {
			expect(list.remove(0)).toHaveProperty('value', 1);
		});
	});

	describe('Reverse Method', () => {
		test('it should reverse LinkedList', () => {
			list.push(2);
			list.push(3);
			list.push(4);
			list.reverse();

			expect(list.head?.value).toBe(4);
			expect(list.tail?.value).toBe(1);
			expect(list.head?.next?.value).toBe(3);
			expect(list.head?.next?.next?.value).toBe(2);
		});
	});
});
