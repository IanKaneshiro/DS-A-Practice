class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const linkedPalindrome = (head) => {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }
  return values.join("") === values.reverse().join("");
};

const middleValue = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    if (!fast) return slow.val;
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.val;
};

const linkedListCycle = (head) => {
  const visited = new Set();
  let current = head;

  while (current) {
    if (visited.has(current)) {
      return true;
    }
    visited.add(current);
    current = current.next;
  }
  return false;
};

const reverseTree = (root) => {
  if (!root) return null;
  const left = flipTree(root.left);
  const right = flipTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
