var canJump = function(nums) {
  let goodIndex = nums.length - 1
  for(let i = nums.length - 2; i >= 0; i--) {
      if(goodIndex <= i + nums[i]) {
          goodIndex = i
      }
  }
  return goodIndex === 0
};