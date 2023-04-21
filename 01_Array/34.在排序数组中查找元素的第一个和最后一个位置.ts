/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
// O(logn)肯定是二分法
// 二分查找中，寻找 leftIdx 即为在数组中寻找第一个大于等于 target 的下标，寻找
// rightIdx 即为在数组中寻找第一个大于 target 的下标，然后将下标减一

function searchRange(nums: number[], target: number): number[] {
  let ans = [-1, -1];
  const binarySearch = (nums: number[], target: number, lower: boolean) => {
    let left = 0,
      right = nums.length - 1,
      ans = nums.length;
    while (left <= right) {
      const mid = left + Math.floor((right - left + 1) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  };
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
}
// @lc code=end
