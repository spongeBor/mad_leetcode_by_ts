/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
// 二分
function search(nums: number[], target: number): number {
  if (!nums.length) return -1;
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l + 1) / 2);
    if (nums[mid] === target) return mid;
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[nums.length - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}
// @lc code=end
