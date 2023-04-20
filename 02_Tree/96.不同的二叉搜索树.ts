/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
// 动态规划
// G(n): 长度为n的序列能构成的不同二叉搜索树的个数
// F(i, n): 以i为根、序列长度的n的不同二叉搜索树的个数(1<=i<=n)
// G(n) = sum<i, n>(F(i, n)), G(0) = 1, G(1) = 1;
// F(i, n) = G(i - 1) * G(n - i);
// G(n) = sum<i, n>G(i - 1) * G(n - i);
function numTrees(n: number): number {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
}
// @lc code=end

// 卡特兰数公式
// C(0) = 1 C(n+1) = 2C(n)(2n + 1) / (i + 2)
function numTrees_2(n: number): number {
  let nums = 1;
  for (let i = 0; i < n; i++) {
    nums = (2 * nums * (2 * i + 1)) / (i + 2);
  }
  return nums;
}
