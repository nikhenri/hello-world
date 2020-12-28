console.log("Hello u fuck");

let c = [{type:'Monkey', url:"https://earthnworld.com/wp-content/uploads/2016/01/Mandrill-1-scaled.jpg"},
        {type:'Baboon', url:"https://earthnworld.com/wp-content/uploads/2018/10/Capuchin-Monkey-scaled.jpg"},
        {type:'Chimpanzee', url:"https://earthnworld.com/wp-content/uploads/2018/10/Rhesus-Monkey-scaled.jpg"},
        {type:'Gorilla', url:"https://earthnworld.com/wp-content/uploads/2018/10/Spider-Monkey-scaled.jpg"},
        {type:'Lemur', url:"https://earthnworld.com/wp-content/uploads/2018/10/Squirrel-Monkey-scaled.jpg"},
        {type:'Orangutan', url:"https://earthnworld.com/wp-content/uploads/2018/10/Golden-Lion-Tamarin-scaled.jpg"},
      ];

// get item by ID
let bt = document.querySelector('#bt');
console.log(bt);

// get item by type
let h1 = document.querySelector('h1');
console.log(h1);

// link event
bt.addEventListener('click', myFunction);

let imgSpace = document.querySelector('#imgSpace');
console.log(imgSpace);
//imgSpace.src = "https://assets.codepen.io/123865/dog.png"

// random int
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// my super function
function myFunction() {
  randomIdx = getRandomInt(c.length);
  console.log(randomIdx);
  h1.innerText = c[randomIdx].type;
  document.querySelector('body').style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
  //imgSpace.src = b[randomIdx]
  imgSpace.src = c[randomIdx].url
}