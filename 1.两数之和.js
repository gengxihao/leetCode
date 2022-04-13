/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums.length || nums === null) {
    return [];
  }
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
// @lc code=end

