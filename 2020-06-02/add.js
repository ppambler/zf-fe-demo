// 函数表达式，不要匿名的，而这是规范
// Number.prototype.plus = function plus(num) {
//   // this -> 我们要操作的那个数字实例（对象）
//   num = Number(num);
//   // 容错性处理
//   if (isNaN(num)) {
//     num = 0;
//   }
//   // 返回Number类的实例，实现链式写法 -> 不写用new Number(10)这样的姿势
//   // 你看我们之前都是一个数字调用一个方法
//   return this + num;
// };

// Number.prototype.minus = function minus(num) {
//   num = Number(num);
//   if (isNaN(num)) {
//     num = 0;
//   }
//   return this - num;
// };

!(function anonymous(proto) {
  const checkNum = function checkNum(num) {
    num = Number(num);
    if (isNaN(num)) {
      num = 0;
    }
    return num;
  };

  Number.prototype.plus = function plus(num) {
    return this + checkNum(num);
  };

  Number.prototype.minus = function minus(num) {
    return this - checkNum(num);
  };
})(Number.prototype);

let n = 10;
let m = n.plus(10).minus(5);
console.log(m); //=>15（10+10-5）
console.log(n.plus(20)); //  -> 30

function C1(name) {
  //=>name:undefined 没有给实例设置私有的属性name
  if (name) {
    this.name = name;
  }
}

function C2(name) {
  this.name = name;
  //=>给实例设置私有属性name =>this.name=undefined
}

function C3(name) {
  this.name = name || "join";
  //=>给实例设置私有属性name =>this.name=undefined || 'join'
}
C1.prototype.name = "Tom";
C2.prototype.name = "Tom";
C3.prototype.name = "Tom";
alert(new C1().name + new C2().name + new C3().name);
//=> (new C1().name) 找原型上的 'Tom'
//=> (new C2().name) 找私有属性 undefined
//=> (new C3().name) 找私有属性 'join'
//=> 'Tomundefinedjoin'
