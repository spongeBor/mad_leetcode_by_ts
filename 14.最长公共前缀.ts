/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs === null || strs.length === 0) {
    return "";
  }
  const length = strs[0].length;
  const count = strs.length;
  for (let i = 0; i < length; i++) {
    const c = strs[0][i];
    for (let j = 1; j < count; j++) {
      if (i === strs[j].length || strs[j][i] !== c) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
// @lc code=end
