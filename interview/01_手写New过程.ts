function myNew(...args: any) {
  const Constructor = args[0];
  const obj = Object.create(Constructor.prototype);
  const res = Constructor.apply(obj, args.slice(1));
  return res instanceof Object ? res : obj;
}
