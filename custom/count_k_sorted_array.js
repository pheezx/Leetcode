/*

Find total accurence of element k in a sorted array

binary search for lower and upper bounds seperately 
 0 1 2 3 4 5 6
[1,2,3,3,3,4,5]
lo=0
hi=6
mid = 3

Lower bound:
mid=Math.floor((upper+lower)/2)
Case 1: arr[mid]<k
lo =mid+1
Case 2: arr[mid]>=k
hi = mid

Upper bound:
mid=Math.ceil((upper+lower)/2)
Case 1: arr[mid]<=k
lo =mid
Case 2: arr[mid] >k
hi=mid-1



The issue is with the case when arr[mid]===k
The tricky part is to avoid infinite loop
Case 3: arr[mid]===k
subcase: arr[lo]===arr[hi] break

[1,2,3]
k=9
lo=2
hi=2
mid=2


*/

function findBound(arr, k, boundType) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    let mid = (hi + lo) / 2;
    mid = boundType === "LOWER" ? Math.floor(mid) : Math.ceil(mid);
    if (arr[mid] < k) {
      lo = mid + 1;
    } else if (arr[mid] > k) {
      hi = mid - 1;
    } else if (boundType === "LOWER") {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return hi;
}

function countK(arr, k) {
  if (k < arr[0] || k >= arr[arr.length - 1]) return 0;
  let lo = findBound(arr, k, "LOWER");
  let hi = findBound(arr, k, "UPPER");

  return hi - lo + 1;
}

console.log(countK([1, 2, 3, 3, 3, 4, 5], 3));
console.log(countK([1, 2, 3, 3, 3, 4, 5], 2));
console.log(countK([1, 2, 3, 3, 3, 4, 6], 5));
console.log(countK([1, 2, 3, 3, 3, 4, 6], 0));
console.log(countK([1, 2, 3, 3, 3, 4, 6], 9));
