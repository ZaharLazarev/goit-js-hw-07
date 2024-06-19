const listElement=document.querySelectorAll(".item");
const header = document.querySelectorAll("h2")
const list=document.querySelector("li");
let i=0;
let k = (-1);
listElement.forEach(element => {
  i+=1;
})
console.log(`Number of categories: ${i}`);
listElement.forEach(element => {
  k+=1;
  console.log(`Category: ${header[k].textContent}`);
  const quantityOfLi = element.querySelectorAll("ul>li");
  console.log(`Elements: ${quantityOfLi.length}`);
});


