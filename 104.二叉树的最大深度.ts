/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  let res = 0;
  if (!root) return 0;
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    for (let i = 1; i <= length; i++) {
      const node = queue.shift();
      if (node) {
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    res++;
  }
  return res;
}
// @lc code=end
function maxDepth1(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
