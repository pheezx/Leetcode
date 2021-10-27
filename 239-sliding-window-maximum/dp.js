function print(arr) {
  let s = "";
  console.log("" + arr);
}

var maxSlidingWindow = function (arr, w) {
  const max_left = new Array(arr.length);
  const max_right = new Array(arr.length);

  max_right[arr.length - 1] = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    max_left[i] = i % w == 0 ? arr[i] : Math.max(max_left[i - 1], arr[i]);
  }
  for (let j = arr.length - 2; j >= 0; j--) {
    max_right[j] = j % w == 0 ? arr[j] : Math.max(max_right[j + 1], arr[j]);
  }

  // print(arr);
  // print(max_left);
  // print(max_right);
  let sliding_max = new Array(arr.length - w + 1);
  for (let i = 0; i + w <= arr.length; i++) {
    sliding_max[i] = Math.max(max_right[i], max_left[i + w - 1]);
  }

  return sliding_max;
};

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(arr, k));
