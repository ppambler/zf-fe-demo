// var a = ?;
// if (a == 1 && a == 2 && a == 3) {
//     console.log('OK');
// }

let a = {
  i: 0,
  valueOf: function valueOf() {
    console.log("我是valueOf");
    return ++this.i;
  },
  toString: function toString() {
    console.log("我是toString");
    return ++this.i;
  },
};
if (a == 1 && a == 2 && a == 3) {
  console.log("OK");
}

// var a = {
//   arr: [1, 2, 3],
//   toString: function toString() {
//     return this.arr.shift();
//   },
// };
// if (a == 1 && a == 2 && a == 3) {
//   console.log("OK");
// }

// var a = [1, 2, 3];
// a.toString = a.shift;
// if (a == 1 && a == 2 && a == 3) {
//   console.log("OK");
// }

var i = 0;
Object.defineProperty(window, "a", {
  get() {
    //  -> 获取window.a的时候触发
    return ++i;
  },
  set() {
    //  -> 给window.a设置属性值的时候触发
  },
});

if (a == 1 && a == 2 && a == 3) {
  console.log("OK");
}

Array.prototype.push = function push(num) {
  //=>this:arr
  //this.length=this.length||0;
  //=>拿原有length作为新增项的索引
  this[this.length] = num;
  //=>length的长度会自动跟着累加1
};
let arr = [10, 20]; //=>{0:10,1:20,length:2}
arr.push(30);

let obj = {
  2: 3,
  3: 4,
  length: 2,
  push: Array.prototype.push,
};
obj.push(1); //=>obj[2]=1  obj.length=3
obj.push(2); //=>obj[3]=2  obj.length=4
console.log(obj); //=>{2:1,3:2,length:4...}

let obj = {
  1: 10,
  push: Array.prototype.push,
};
obj.push(20); //=>obj[obj.length]=20   obj[0]=20
console.log(obj);
