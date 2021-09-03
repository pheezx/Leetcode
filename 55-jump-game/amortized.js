var canJumpFromIndex = function(nums, index, memo) {
  if(memo[index] !== undefined) {
      return memo[index]
  }
  const maxIndex = Math.min(nums.length - 1, index + nums[index])
  for(let i = index + 1; i <= maxIndex; i++) {
      if(canJumpFromIndex(nums, i, memo)) {
          memo[index] = true
          return true
      }
  }
  memo[index] = false
  return false
};

var canJump = function(nums) {
  const memo = []
  memo[nums.length - 1] = true
  return canJumpFromIndex(nums, 0, memo)
};