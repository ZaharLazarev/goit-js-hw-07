const refs={
  form:document.querySelector("form"),
  email:document.querySelector('input[type="email"]'),
  password:document.querySelector('input[type="password"]'),
  btn:document.querySelector('button[type="submit"]'),
  inp:document.querySelectorAll("input")
}
refs.form.addEventListener("submit", handler);
function handler(event){
  const result={};
  event.preventDefault();
  refs.inp.forEach(element => {
    const key=element.getAttribute("name");
    const value=element.value;
    result[key]=value;
})
if(refs.email.value===""||refs.password.value===""){
  console.log("All form fields must be filled in");
}
else{
console.log(result);
  };
  reset();
}
function reset(){
  refs.form.reset();
}

