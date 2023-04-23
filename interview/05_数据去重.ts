function quchong(arr: Array<any>) {
  const newArr: any = [];
  arr.reduce((pre, next) => {
    if (!pre.has(next)) {
      pre.set(next, 1);
      newArr.push(next);
    }
    return pre;
  }, new Map());
  return newArr;
}
