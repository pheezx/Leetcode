var lengthOfLIS = function (nums) {
  const sub = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    if (num > sub[sub.length - 1]) {
      sub.push(num);
    } else {
      let j = binary(sub, num);
      sub[j] = num;
    }
  }
  return sub.length;
};

function binary(nums, n) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let i = Math.floor((left + right) / 2);
    if (nums[i] < n) {
      left = i + 1;
    } else {
      right = i;
    }
  }
  return left;
}
