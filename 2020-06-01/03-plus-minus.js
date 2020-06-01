Number.prototype.plus = function plus(n) {
  let num = this.valueOf() + n;
  return new Number(num);
};

Number.prototype.minus = function minus(n) {
  let num = this.valueOf() - n;
  return num;
};

let n = 10;
let m = n.plus(10).minus(5);
console.log(m); //=>15（10+10-5）
