Array.prototype.slice = function slice(n) {
  let newArr = [];
  for (let i = n; i < this.length; i++) {
    newArr[newArr.length] = this[i];
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2)); // [3,4,5]
console.log("我是你大爷".slice(2));
console.log(Array.prototype.slice.call("我是你大爷", 2));
