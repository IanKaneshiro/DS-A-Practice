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
  // todo
};
