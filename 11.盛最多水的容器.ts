/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1,
    res = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      res = Math.max(res, height[i] * (j - i));
      i += 1;
    } else {
      res = Math.max(res, height[j] * (j - i));
      j -= 1;
    }
  }
  return res;
}
// @lc code=end
