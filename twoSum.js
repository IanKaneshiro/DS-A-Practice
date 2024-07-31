var twoSum = function (nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in seen) {
      return [i, seen[complement]];
    }
    seen[nums[i]] = i;
  }
};
