/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const dfs = (root: TreeNode | null, lev: number) => {
    if (!root) return null;
    if (lev >= res.length) {
      res.push([]);
    }
    res[lev].push(root.val);
    dfs(root.left, lev + 1);
    dfs(root.right, lev + 1);
  };
  dfs(root, 0);
  return res;
}
// @lc code=end
function levelOrder1(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    const currentLevelSize = queue.length;
    res.push([]);
    for (let i = 1; i <= currentLevelSize; i++) {
      const node = queue.shift();
      if (node) {
        res[res.length - 1].push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
  }
  return res;
}
