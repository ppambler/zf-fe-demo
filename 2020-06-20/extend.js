// function A() {
//   this.x = "A";
// }

// A.prototype.getX = function getX() {
//   console.log(this.x);
// };

// function B() {
//   A.call(this); // this.x = "A" -> b.x = "A"
//   this.y = "B";
// }

// // -> Object.create(OBJ) 创建一个空对象，让其__proto__指向OBJ（把OBJ作为空对象的原型）
// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;

// B.prototype.getY = function getY() {
//   console.log(this.y);
// };

class A {
  constructor() {
    // 私有属性
    this.x = "A";
  }
  // 设置到A.prototype上的方法 -> 公有属性
  getX() {
    console.log(this.x);
  }
}
class B extends A {
  constructor() {
    // 一但使用extends实现继承，只要自己写了constructor，就必须写super -> 这是语法规定哈！
    super();
    this.y = "B";
  }
  getY() {
    console.log(this.y);
  }
}

let b = new B();

console.dir(b);
