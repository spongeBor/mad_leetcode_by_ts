/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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
// 深度优先
function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  if (root.left === null && root.right === null) {
    return 1;
  }
  let min = Number.MAX_SAFE_INTEGER;
  if (root.left !== null) {
    min = Math.min(minDepth(root.left), min);
  }
  if (root.right !== null) {
    min = Math.min(minDepth(root.right), min);
  }
  return min + 1;
}
// @lc code=end
