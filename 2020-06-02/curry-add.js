function add(...outerArgs) {
  add = function (...innerArgs) {
    outerArgs.push(...innerArgs);
    return add;
  };
  add.toString = function () {
    return outerArgs.reduce((x, y) => x + y);
  };
  return add;
}
let res = add(1, 2)(3)(4)(5)(6, 7);
alert(res); //=>alert会把输出的值转换为字符串（toString()）

/*
 * 第一次执行ADD  outerArgs=[1,2]  重写了ADD
 * 第二次执行ADD  innerArgs=[3]   outerArgs=[1,2,3]
 * 第三次执行ADD  innerArgs=[4]   outerArgs=[1,2,3,4]
 * ......
 * outerArgs=[1,2,3,4,5,6,7]
 */
console.log(res.toString());

function currying(anonymous, length) {
  return function add(...args) {
    if (args.length >= length) {
      return anonymous(...args);
    }
    return currying(anonymous.bind(null, ...args), length - args.length);
  };
}
let add = currying(function anonymous(...args) {
  return args.reduce((x, y) => x + y);
}, 4);
