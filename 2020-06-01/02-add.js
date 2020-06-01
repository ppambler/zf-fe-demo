console.log(add(1)); //1
// console.log(add(1)(2)); //3
// console.log(add(1)(2)(3)); //6
// console.log(add(1)(2, 3)); //6
// console.log(add(1, 2)(3)); //6
console.log(add(1, 2, 3)); //6

function add(...args) {
  add.toString = function () {
    return args.reduce((x, y) => {
      return x + y;
    });
  };
  return function proxy() {};
}
