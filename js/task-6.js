function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
const refs = {
  input: document.querySelector('input[type="number"]'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector("#boxes"),
};
let size = 30;
refs.create.addEventListener("click", () => createBoxes(refs.input.value));
refs.destroy.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  refs.boxes.innerHTML = ""; 
  size = 30;
  const fragment = document.createDocumentFragment(); 
  for (let i = 0; 1 < i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }
  refs.boxes.appendChild(fragment); 
}

function destroyBoxes() {
  refs.boxes.innerHTML = ""; 
}





