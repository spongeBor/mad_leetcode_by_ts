/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];
  const dfs = (target: number, combine: number[], idx: number) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    dfs(target, combine, idx + 1);
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return ans;
}
// @lc code=end
