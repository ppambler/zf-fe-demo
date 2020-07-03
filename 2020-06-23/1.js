console.log(document.getElementById("btn"));

let btn = document.getElementById("btn");

btn.style.width = "100px";
btn.style.height = "200px";

//=>10次回流
for (let i = 0; i < 10; i++) {
  let span = document.createElement("span");
  navBox.appendChild(span);
}

let frag = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
  let span = document.createElement("span");
  frag.appendChild(span);
}
navBox.appendChild(frag);

let str = ``;
for (let i = 0; i < 10; i++) {
  str += `<span></span>`;
}
navBox.innerHTML = str;
