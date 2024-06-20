function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs={
  color:document.querySelector(".color"),
  btn:document.querySelector(".change-color"),
  body:document.querySelector("body")
}

refs.btn.addEventListener("click", handler);
function handler(){
  getRandomHexColor();
  refs.body.style.backgroundColor=refs.color.textContent=getRandomHexColor();
}


