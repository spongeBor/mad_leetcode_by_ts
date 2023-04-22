function debounce(fn: Function, delay = 500) {
  let timer: any;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    const args = arguments;
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
