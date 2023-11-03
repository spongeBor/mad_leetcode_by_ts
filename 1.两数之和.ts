/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for(let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) {
      return [map.get(target - nums[i])!, i];
    }
    map.set(nums[i], i);
  }
  return []
};
// @lc code=end

