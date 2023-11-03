/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  const length = nums.length;
  if (length < 4) return result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (
      nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] <
      target
    )
      continue;
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target)
        continue;
      let l = j + 1,
        r = length - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l += 1;
          while (l < r && nums[r] === nums[r - 1]) r -= 1;
          l += 1;
          r -= 1;
        } else if (sum < target) {
          l += 1;
        } else {
          r -= 1;
        }
      }
    }
  }
  return result;
}
// @lc code=end
