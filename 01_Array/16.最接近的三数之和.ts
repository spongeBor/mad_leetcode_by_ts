/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < length; i++) {
    let start = i + 1,
      end = length - 1;
    while (start < end) {
      let sum = nums[start] + nums[end] + nums[i];
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }
      if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      } else {
        return res;
      }
    }
  }
  return res;
}
// @lc code=end
