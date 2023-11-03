/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const judge = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p === null && q === null) {
      return true;
    } else if (p === null || q === null) {
      return false;
    } else if (p.val !== q.val) {
      return false;
    } else {
      return judge(p.left, q.left) && judge(p.right, q.right);
    }
  };
  return judge(p, q);
}
// @lc code=end
