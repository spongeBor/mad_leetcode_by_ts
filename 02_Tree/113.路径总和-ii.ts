/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  const queue: number[] = [];
  const dfs = (root: TreeNode | null, targetSum: number) => {
    if (root === null) return;
    queue.push(root.val);
    targetSum -= root.val;
    if (!root.left && !root.right && targetSum === 0) {
      result.push([...queue]);
    }
    dfs(root.left, targetSum);
    dfs(root.right, targetSum);
    queue.pop();
  };
  dfs(root, targetSum);
  return result;
}
// @lc code=end
