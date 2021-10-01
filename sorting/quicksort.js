function quicksort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  const pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, ++i, j);
    }
  }
  swap(arr, ++i, end);
  quicksort(arr, start, i - 1);
  quicksort(arr, i + 1, end);
}

function swap(arr, lo, hi) {
  const temp = arr[lo];
  arr[lo] = arr[hi];
  arr[hi] = temp;
}

let arr = [2, 4, 3, 5];
console.log(`${arr} -> `);
quicksort(arr);
console.log(`      ${arr}`);

arr = [2, 5, 8, 9, 3, 4];
console.log(`${arr} ->`);
quicksort(arr);
console.log(`      ${arr}`);

arr = [1, 1, 4, 88, 3, 4, 0, 2, 2];
console.log(`${arr} -> `);
quicksort(arr);
console.log(`      ${arr}`);
