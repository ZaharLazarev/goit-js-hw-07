const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", Omg);
function Omg(event){
  output.textContent=event.currentTarget.value.trim();
  if(output.textContent===""){
    output.textContent="Anonymous";
  }
}

