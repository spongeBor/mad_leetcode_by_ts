/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  const height = (root: TreeNode | null) => {
    if (root === null) {
      return 0;
    }
    const leftHeight: number = height(root.left);
    const rightHeight: number = height(root.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };
  return height(root) >= 0;
}

// @lc code=end
function isBalanced1(root: TreeNode | null): boolean {
  const height = (root: TreeNode | null): number => {
    if (root === null) {
      return 0;
    } else {
      return Math.max(height(root.left), height(root.right)) + 1;
    }
  };
  if (root === null) {
    return true;
  } else {
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  }
}
