var preorderTraversal = function (root) {
  let cur = root;
  const result = [];
  while (cur) {
    if (!cur.left) {
      result.push(cur.val);
      cur = cur.right;
    } else {
      predecessor = findPredecessor(cur);
      if (!predecessor.right) {
        result.push(cur.val);
        predecessor.right = cur;
        cur = cur.left;
      } else {
        predecessor.rights = null;
        cur = cur.right;
      }
    }
  }
  return result;
};

function findPredecessor(root) {
  if (!root.left) return root;
  let cur = root.left;
  while (cur.right && cur.right !== root) cur = cur.right;
  return cur;
}
