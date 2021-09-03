var canJump = function(nums) {
  const memo = []
  memo[nums.length - 1] = true
  for(let i = nums.length - 2; i >= 0; i--) {
      const maxIndex = Math.min(nums.length - 1, i + nums[i])
      memo[i] = false
      for(let j = i + 1; j <= maxIndex; j++) {
          if(memo[j]) {
              memo[i] = true
          }
      }
  }
  return memo[0]
};