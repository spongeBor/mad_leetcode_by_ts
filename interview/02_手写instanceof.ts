function myInstanceof(father: any, child: any) {
  const fp = father.prototype;
  let cp = child.__proto__;
  while (cp) {
    if (cp === fp) {
      return true;
    }
    cp = cp.__proto__;
  }
  return false;
}
