/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const m = nums1.length;
  const n = nums2.length;
  const totalLeft = m + Math.floor((n - m + 1) / 2);
  let left = 0,
    right = m;
  while (left < right) {
    const i = left + Math.floor((right - left + 1) / 2);
    const j = totalLeft - i;
    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }
  const i = left;
  const j = totalLeft - i;
  const nums1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  const nums1RightMin = i === m ? Number.MAX_SAFE_INTEGER : nums1[i];
  const nums2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  const nums2LeftMin = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];
  if (((m + n) & 1) === 1) {
    return Math.max(nums1LeftMax, nums2LeftMax);
  } else {
    return (
      (Math.max(nums1LeftMax, nums2LeftMax) +
        Math.min(nums1RightMin, nums2LeftMin)) /
      2
    );
  }
}
// @lc code=end
