/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
// O(logn) 使用二分
function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = n;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
// @lc code=end
