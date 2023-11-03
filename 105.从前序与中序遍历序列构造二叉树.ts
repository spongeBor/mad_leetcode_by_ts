/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let preIdx: number;
  const idxMap = new Map<number, number>();
  const helper = (inLeft: number, inRight: number) => {
    // inLeft/inRight 都是序号
    if (inLeft > inRight) return null;
    const rootVal = preorder[preIdx++];
    const root = new TreeNode(rootVal);
    const index = idxMap.get(rootVal)!;
    // 对于中序遍历，根节点的前一节点总是其左孩子， 后一节点总是其右孩子
    // 要先左后右,因为数是从先序遍历中取的, 先左后右
    root.left = helper(inLeft, index - 1);
    root.right = helper(index + 1, inRight);
    return root;
  };
  preIdx = 0;
  inorder.forEach((val, idx) => {
    idxMap.set(val, idx);
  });
  return helper(0, inorder.length - 1);
}
// @lc code=end
