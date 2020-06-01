console.log(add(1)); //1
console.log(add(1)(2)); //3
console.log(add(1)(2)(3)); //6
console.log(add(1)(2, 3)); //6
console.log(add(1, 2)(3)); //6
console.log(add(1, 2, 3)); //6

function add(...args) {
  let tmp = args;

  let res = (add.toString = function () {
    return tmp.reduce((x, y) => {
      return x + y;
    });
  });
  return function proxy(...nextArgs) {
    tmp.push(...arguments);
    return proxy;
  };
}
