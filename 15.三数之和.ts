/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// 双指针
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  if (nums.length < 3) return result;
  const newNums = [...nums];
  newNums.sort((a, b) => a - b);
  for (let i = 0; i < newNums.length - 2; i++) {
    // 排序后第一个为0，则三数之和就不能为0；
    if (newNums[i] > 0) break;
    // 规定三个数不能相等
    if (i > 0 && newNums[i] === newNums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = newNums.length - 1;
    while (l < r) {
      const sum = newNums[i] + newNums[l] + newNums[r];
      if (sum < 0) {
        l += 1;
      } else if (sum > 0) {
        r -= 1;
      } else {
        result.push([newNums[i], newNums[l], newNums[r]]);
        while (l < r && newNums[l] === newNums[l + 1]) l += 1;
        while (l < r && newNums[r] === newNums[r - 1]) r -= 1;
        l += 1;
        r -= 1;
      }
    }
  }
  return result;
}
// @lc code=end
