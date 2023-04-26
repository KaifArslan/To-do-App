const form = document.querySelector("#inputs")
const text = document.querySelector("#texts") 
const buttons = document.querySelector("#submit")
const para = document.querySelector("#tasks")





buttons.addEventListener("click",()=>{ 

  console.log(text.value,);
  para.append(text.value);

})
