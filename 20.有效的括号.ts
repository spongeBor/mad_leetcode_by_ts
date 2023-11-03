/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pair = new Map<string, string>([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk: string[] = [];
  for (const i of s) {
    if (pair.has(i)) {
      if (!stk.length || stk[stk.length - 1] !== pair.get(i)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(i);
    }
  }
  return !stk.length;
}
// @lc code=end
