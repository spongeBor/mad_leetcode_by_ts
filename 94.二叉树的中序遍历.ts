/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  const traversal: number[] = [];
  const inOrder = (root: TreeNode | null) => {
    if (root) {
      inOrder(root.left);
      traversal.push(root.val);
      inOrder(root.right);
    }
  };
  inOrder(root);
  return traversal;
}
// @lc code=end
// 迭代
function inorderTraversal2(root: TreeNode | null): number[] {
  const traversal: number[] = [];
  const stack: TreeNode[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    traversal.push(root.val);
    root = root.right;
  }
  return traversal;
}
