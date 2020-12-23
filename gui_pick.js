console.log("Hello u fuck");

text_list = ['op', 'broken', 'need nerf', 'unbalanced']

// random int
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// get item by ID
for (imgCard of document.querySelectorAll('.imgDiv')){
  console.log(imgCard);
  imgCard.addEventListener('click', event_click_on_card);

}

function event_click_on_card (event) {
  
  height = window.getComputedStyle(this).getPropertyValue("height");
  width = window.getComputedStyle(this).getPropertyValue("width");

  console.dir(this)
  console.log(event);

  event.target.remove();
  p = document.createElement('p');
  p.innerText = text_list[getRandomInt(text_list.length)]
  this.appendChild(p);
  this.style.height = height
  this.style.width = width
}