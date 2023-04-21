/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
  private stk1: number[];
  private stk2: number[];
  constructor() {
    this.stk1 = [];
    this.stk2 = [];
  }

  push(val: number): void {
    this.stk1.push(val);
    if (!this.stk2.length || val <= this.stk2[this.stk2.length - 1]) {
      this.stk2.push(val);
    }
  }

  pop(): void {
    this.stk1.pop() === this.stk2[this.stk2.length - 1] && this.stk2.pop();
  }

  top(): number {
    return this.stk1[this.stk1.length - 1];
  }

  getMin(): number {
    return this.stk2[this.stk2.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
