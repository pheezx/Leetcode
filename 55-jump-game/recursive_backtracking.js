var canJump = function(nums, index = 0) {
  if(index === nums.length - 1) {
      return true
  }
  const maxSteps = nums[index]
  for(let step = 1; step <= maxSteps && index + step < nums.length; step++) {
      if(canJump(nums, index + step)) {
          return true
      }
  }
  return false
};