function deepClone(obj: any = {}, map = new WeakMap()) {
  if (typeof obj !== "object") return obj;
  if (map.get(obj)) return map.get(obj);
  let result: any = {};
  if (
    obj instanceof Array ||
    Object.prototype.toString.call(obj) === "[object Array]"
  ) {
    result = [];
  }
  map.set(obj, result);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], map);
    }
    return obj;
  }
  return result;
}
