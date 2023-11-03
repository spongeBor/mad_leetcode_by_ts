/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
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
// 二叉排序树中序遍历是递增的
// O(n) O(n)
function recoverTree(root: TreeNode | null): void {
  const inOrder = (root: TreeNode | null, nums: number[]) => {
    if (root === null) return;
    inOrder(root.left, nums);
    nums.push(root.val);
    inOrder(root.right, nums);
  };
  const findTwoSwapped = (nums: number[]) => {
    const n = nums.length;
    let index1 = -1,
      index2 = -1;
    for (let i = 0; i < n - 1; ++i) {
      if (nums[i + 1] < nums[i]) {
        index2 = i + 1;
        if (index1 === -1) {
          index1 = i;
        } else {
          break;
        }
      }
    }
    let x = nums[index1],
      y = nums[index2];
    return [x, y];
  };
  const recover = (
    root: TreeNode | null,
    count: number,
    x: number,
    y: number
  ) => {
    if (root !== null) {
      if (root.val === x || root.val === y) {
        root.val = root.val === x ? y : x;
        if (--count === 0) {
          return;
        }
      }
      recover(root.left, count, x, y);
      recover(root.right, count, x, y);
    }
  };
  const nums: number[] = [];
  inOrder(root, nums);
  const [first, second] = findTwoSwapped(nums);
  recover(root, 2, first, second);
}
// @lc code=end
