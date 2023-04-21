/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let postIdx: number;
  const idxMap = new Map<number, number>();
  const helper = (inLeft: number, inRight: number) => {
    // inLeft/inRight 都是序号
    if (inLeft > inRight) return null;
    const rootVal = postorder[postIdx--];
    const root = new TreeNode(rootVal);
    const index = idxMap.get(rootVal)!;
    // 对于中序遍历，根节点的前一节点总是其左孩子， 后一节点总是其右孩子
    // 要先右后左,因为数是从后序遍历中取的，后序遍历先存左值后存右值，但是倒着读取
    root.right = helper(index + 1, inRight);
    root.left = helper(inLeft, index - 1);
    return root;
  };
  postIdx = postorder.length - 1;
  inorder.forEach((val, idx) => {
    idxMap.set(val, idx);
  });
  return helper(0, inorder.length - 1);
}
// @lc code=end
