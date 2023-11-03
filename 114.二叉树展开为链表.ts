/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  const list: TreeNode[] = [];
  const preorderTraversal = (root: TreeNode | null, list: TreeNode[]) => {
    if (root !== null) {
      list.push(root);
      preorderTraversal(root.left, list);
      preorderTraversal(root.right, list);
    }
  };
  preorderTraversal(root, list);
  const size = list.length;
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1],
      curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
}
// @lc code=end
