/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  const judge = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p === null && q === null) {
      return true;
    } else if (p === null || q === null) {
      return false;
    } else {
      return (
        p.val === q.val && judge(p.left, q.right) && judge(p.right, q.left)
      );
    }
  };
  return judge(root, root);
}
// @lc code=end
