console.log("Woof");
//-------------------------------------------------

let input = document.querySelector('input');
let button = document.querySelector('button');
let text = document.querySelector('#ct');
console.log(text)
button.addEventListener('click', (event) => {  // add event for each button
  let ct = Math.atan(input.value)/(Math.PI/2)
  input.value = ""
  text.innerText = `${ct} Ct`;
});
