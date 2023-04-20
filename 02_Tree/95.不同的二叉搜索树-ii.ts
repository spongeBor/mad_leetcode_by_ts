/*
 * @lc app=leetcode.cn id=95 lang=typescript
 *
 * [95] 不同的二叉搜索树 II
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
// 算法思路：
// 假设当前序列长度为n，如果我们枚举根节点的值为i,
// 那么根据二叉搜索树的性质我们可以知道左子树的节点值的集合为[1, ...i - 1]
// 右子树的节点值集合为[i+1...n]
// 而左子树和右子树的生成相较于原问题是一个序列长度缩小的子问题
// 递归的入口即为 generateTrees(1, n)，出口为当 start>end的时候，当前二叉搜索树为空，返回空节点即可
function generateTrees(n: number): Array<TreeNode | null> {
  const generateTrees = (start: number, end: number) => {
    const allTrees: Array<TreeNode | null> = [];
    if (start > end) {
      allTrees.push(null);
      return allTrees;
    }
    for (let i = start; i <= end; i++) {
      const leftTrees = generateTrees(start, i - 1);
      const rightTrees = generateTrees(i + 1, end);
      for (const left of leftTrees) {
        for (const right of rightTrees) {
          const currTree = new TreeNode(i);
          currTree.left = left;
          currTree.right = right;
          allTrees.push(currTree);
        }
      }
    }
    return allTrees;
  };
  if (n === 0) {
    return [];
  } else {
    return generateTrees(1, n);
  }
}
// @lc code=end
