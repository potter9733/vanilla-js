const body = document.querySelector("body");

function changeColor() {
  if (window.innerWidth < 1140) {
    body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth >= 1140 && window.innerWidth < 1210) {
    body.style.backgroundColor = "thistle";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

function ColorByResize() {
  window.addEventListener("resize", changeColor);
}

ColorByResize();
