/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const symbolValues = new Map();
  symbolValues.set("I", 1);
  symbolValues.set("V", 5);
  symbolValues.set("X", 10);
  symbolValues.set("L", 50);
  symbolValues.set("C", 100);
  symbolValues.set("D", 500);
  symbolValues.set("M", 1000);
  let highestLevel = 1;
  let ans = 0;
  const n = s.length;
  for (let i = n - 1; i >= 0; i--) {
    const level = symbolValues.get(s[i]);
    if (level >= highestLevel) {
      ans += level;
      highestLevel = level;
    } else {
      ans -= level;
    }
  }
  return ans;
}
// @lc code=end
