var removeNthFromEnd = function (head, n) {
  const prehead = new ListNode(0, head);
  let it1 = head;
  let it2 = prehead;
  while (n--) {
    it1 = it1.next;
  }
  while (it1) {
    it1 = it1.next;
    it2 = it2.next;
  }
  it2.next = it2.next.next;
  return prehead.next;
};
