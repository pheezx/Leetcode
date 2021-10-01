class PriorityQueue {
  constructor(comp) {
    this.data = [];
    this.comp = comp;
  }
  empty() {
    return this.data.length === 0;
  }
  top() {
    if (this.empty()) throw new Error("Heap is empty");
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  pop() {
    if (this.empty()) throw new Error("Heap is empty");
    this.data[0] = this.data[this.size() - 1];
    this.data.pop();
    this._heapify(0);
  }
  push(val) {
    this.data.push(val);
    let i = this.size() - 1;
    while (i > 0 && this.comp(this.data[this._parent(i)], this.data[i]) > 0) {
      this._swap(i, this._parent(i));
      i = this._parent(i);
    }
  }
  print() {
    console.log(this.data);
  }
  _parent(i) {
    return Math.floor((i + 1) / 2) - 1;
  }
  _left(i) {
    return 2 * (i + 1) - 1;
  }
  _right(i) {
    return 2 * (i + 1);
  }
  _heapify(i) {
    const l = this._left(i);
    const r = this._right(i);
    let largest = i;
    if (l < this.size() && this.comp(this.data[i], this.data[l]) > 0)
      largest = l;
    if (r < this.size() && this.comp(this.data[largest], this.data[r]) > 0)
      largest = r;
    if (largest !== i) {
      this._swap(i, largest);
      this._heapify(largest);
    }
  }
  _swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

const pq = new PriorityQueue((a, b) => a[1] - b[1]);
pq.print();
const arr = [2, 1, 5, 3, 8, 7, 2, 3, 6];
for (let i = 0; i < arr.length; i++) {
  console.log("add: ", arr[i]);
  pq.push([i, arr[i]]);
  pq.print();
}
const sorted = [];
while (!pq.empty()) {
  console.log("remove");
  sorted.push(pq.top());
  pq.pop();
  pq.print();
}
console.log(sorted);
