const refs={
  form:document.querySelector("form"),
  email:document.querySelector('input[type="email"]'),
  password:document.querySelector('input[type="password"]'),
  btn:document.querySelector('button[type="submit"]'),
  inp:document.querySelectorAll("input")
}
function reset(){
  refs.form.reset();
}
refs.form.addEventListener("submit", handler);
function handler(event){
  const result={};
  event.preventDefault();
if(refs.email.value===""||refs.password.value===""){
  alert("All form fields must be filled in");
}
else{
  refs.inp.forEach(element => {
    const key=element.getAttribute("name");
    const value=element.value.trim();
    result[key]=value;
})
console.log(result);
reset();
  };
}


