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
