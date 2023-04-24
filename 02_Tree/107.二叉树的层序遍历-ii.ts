/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    const currentLevelSize = queue.length;
    res.unshift([]);
    for (let i = 1; i <= currentLevelSize; i++) {
      const node = queue.shift();
      if (node) {
        res[0].push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
  }
  return res;
}
// @lc code=end

function levelOrderBottom1(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const dfs = (root: TreeNode | null, lev: number) => {
    if (!root) return null;
    if (lev >= res.length) {
      res.unshift([]);
    }
    res[res.length - lev - 1].push(root.val);
    dfs(root.left, lev + 1);
    dfs(root.right, lev + 1);
  };
  dfs(root, 0);
  return res;
}
