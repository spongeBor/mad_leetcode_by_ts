/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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
//O(n) O(logn)
// 只有中序是不稳定的，可以使用任意中间节点作为排序起点
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const helper = (nums: number[], left: number, right: number) => {
    if (left > right) return null;
    let mid = left + ((right - left + Math.round(Math.random())) >> 1);
    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, left, mid - 1);
    root.right = helper(nums, mid + 1, right);
    return root;
  };
  return helper(nums, 0, nums.length - 1);
}
// @lc code=end
