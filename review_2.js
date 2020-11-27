const body = document.querySelector("body");
const h1 = document.querySelector('h1');


function changeColor() {
  if (window.innerWidth < 800) {
    body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth >= 800 && window.innerWidth < 1200) {
    body.style.backgroundColor = "thistle";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

function sayInnerWidth() {
  h1.innerText = window.innerWidth;
}

function ColorByResize() {
  h1.innerText = window.innerWidth;
  body.style.backgroundColor = changeColor()
  window.addEventListener("resize", changeColor);
  window.addEventListener("resize", sayInnerWidth);
}

ColorByResize();
