var lengthOfLIS = function(nums) {
  const memo=[1]
  for(let i=1;i<nums.length;i++){
      memo[i]=1
      for(let j=0;j<i;j++){
          if(nums[j] <nums[i])
              memo[i]=Math.max(memo[i],1+memo[j])
      }
  }
  return Math.max(...memo)
};