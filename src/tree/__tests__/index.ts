import BinarySearchTree from '../index';

describe('Binary Search Tree', () => {
  test('should insert nodes correctly', () => {
    const tree = new BinarySearchTree();
    tree.insert(47);
    tree.insert(21);
    tree.insert(76);
    tree.insert(18);
    tree.insert(27);
    tree.insert(52);
    tree.insert(82);

    expect(tree.root?.value).toBe(47);
    expect(tree.root?.left?.value).toBe(21);
    expect(tree.root?.right?.value).toBe(76);
    expect(tree.root?.left?.left?.value).toBe(18);
    expect(tree.root?.left?.right?.value).toBe(27);
    expect(tree.root?.right?.left?.value).toBe(52);
    expect(tree.root?.right?.right?.value).toBe(82);
  });

  test('should find value', () => {
    const tree = new BinarySearchTree();
    tree.insert(47);
    tree.insert(21);
    tree.insert(76);
    tree.insert(18);
    tree.insert(27);
    tree.insert(52);
    tree.insert(82);

    expect(tree.contains(18)).toBeTruthy();
  });

  test('should not find value', () => {
    const tree = new BinarySearchTree();
    tree.insert(47);
    tree.insert(21);
    tree.insert(76);
    tree.insert(18);
    tree.insert(27);
    tree.insert(52);
    tree.insert(82);

    expect(tree.contains(99)).toBeFalsy();
  });
});
