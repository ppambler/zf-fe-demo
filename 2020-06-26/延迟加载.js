/*
 * offset：获取当前元素距离BODY的左/上偏移（不论其父参照物是谁）
 *   @params
 *      curEle:current element当前要操作的元素
 *   @return
 *      [object]包含上/左偏移的信息  => {top:xxx,left:xxx}
 * by zhufengpeixun on 2019/08/14
 */
function offset(curEle) {
  let par = curEle.offsetParent,
    l = curEle.offsetLeft,
    t = curEle.offsetTop;
  while (par && par.tagName !== "BODY") {
    if (!/MSIE 8\.0/.test(navigator.userAgent)) {
      l += par.clientLeft;
      t += par.clientTop;
    }
    l += par.offsetLeft;
    t += par.offsetTop;
    par = par.offsetParent;
  }
  return {
    top: t,
    left: l,
  };
}

/*
 * 图片完全显示出来的条件
 *   A:盒子底边距离BODY（页面最顶端）的距离：盒子的高度+盒子距BODY的上偏移
 *   B:浏览器底边距离BODY的距离：一屏幕的高度 + 卷去的高度
 *   A<=B：盒子就完全出现在用户的视野中
 * 让图片显示
 *   获取图片TRUE-IMG属性的值，赋值给SRC属性，当图片能正常加载出来后，让图片显示即可
 */
let imgBox = document.querySelector(".imgBox"),
  _img = imgBox.querySelector("img");

//=>显示图片
//curImg:要显示的图片
function lazyImg(curImg) {
  //给SRC赋值真实的图片地址
  let trueImg = curImg.getAttribute("trueImg");
  curImg.src = trueImg;
  //校验图片是否能够正常加载出来：IMG.ONLOAD事件用来监听图片是否能加载
  curImg.onload = function () {
    curImg.style.display = "block";
  };
  //=>设置自定义属性:isLoad存储当前图片已经加载过了
  curImg.isLoad = true;
}

function whenLazyImg() {
  //=>已经加载过就不要在重复加载了
  if (_img.isLoad) return;

  let HTML = document.documentElement,
    B = HTML.clientHeight + HTML.scrollTop,
    A = imgBox.offsetHeight + offset(imgBox).top; //=>当前案例中，获取距离BODY的上偏移完全可以imgBox.offsetTop，因为父参照物就是BODY
  if (A <= B) {
    //=>符合图片显示的条件了
    lazyImg(_img);
  }
}

//=>监听页面滚动事件（不论基于什么方式，只要页面滚动了，则触发事件）
window.onscroll = throttle(whenLazyImg);

function throttle(callback, wait = 800) {
  let timer = null;
  let startTime;
  return function () {
    const ctx = this;
    const args = arguments;
    const now = +new Date();
    if (startTime && now < startTime + wait) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        startTime = now;
        callback.apply(ctx, args);
      }, wait);
    } else {
      startTime = now;
      callback.apply(ctx, args);
    }
  };
}
