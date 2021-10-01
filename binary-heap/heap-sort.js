/*

[1,2,3,4,5]
parent(i)=Math.floor(i/2)
left(i)=2*i
right(i)=2*i+1

[0,1,2,3,4]
parent(i)=Math.floor((i+1)/2)-1
left(i)=2*(i+1)-1=2i+2-1=2i+1
right(i)=2*(i+1)+1-1=2i+2=2(i+1)


*/

const parent = (i) => Math.floor((i + 1) / 2);
const left = (i) => 2 * (i + 1) - 1;
const right = (i) => 2 * (i + 1);

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const maxHeapify = (arr, i, size = arr.length) => {
  const l = left(i);
  const r = right(i);
  let largest = i;
  if (l < size && arr[l] > arr[i]) largest = l;
  if (r < size && arr[r] > arr[largest]) largest = r;
  if (largest !== i) {
    swap(arr, i, largest);
    maxHeapify(arr, largest, size);
  }
};

const buildMaxHeap = (arr, size = arr.length) => {
  for (let i = parent(size - 1); i >= 0; i--) {
    maxHeapify(arr, i, size);
  }
};

const heapsort = (arr) => {
  buildMaxHeap(arr);
  let size = arr.length;
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    size--;
    maxHeapify(arr, 0, size);
  }
};

const arr = [2, 1, 5, 3, 8, 7, 2, 3, 6];
console.log(arr);
heapsort(arr);
console.log(arr);
