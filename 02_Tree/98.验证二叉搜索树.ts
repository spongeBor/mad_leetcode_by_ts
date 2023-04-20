/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  const helper = (root: TreeNode | null, min: number, max: number): boolean => {
    if (root === null) return true;
    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  };
  return helper(root, -Infinity, Infinity);
}
// @lc code=end
function isValidBST1(root: TreeNode | null): boolean {
  if (root === null) return true;
  const stack: TreeNode[] = [];
  let inOrder = -Infinity;
  while (root !== null || stack.length) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    if (root.val <= inOrder) {
      return false;
    }
    inOrder = root.val;
    root = root.right;
  }
  return true;
}
