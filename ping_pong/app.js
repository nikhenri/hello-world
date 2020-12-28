console.log("Woof");
//-------------------------------------------------
let maxScore = 7;
//-------------------------------------------------
let ScoreText = {};
ScoreText[1] = document.querySelector('#p1ScoreText');
ScoreText[2] = document.querySelector('#p2ScoreText');

//-------------------------------------------------
let bt = {};
bt[1] = document.querySelector('#btP1');
bt[2] = document.querySelector('#btP2');
let btReset = document.querySelector('#btReset');

//-------------------------------------------------
for (let btItem of Object.values(bt)) { // return each object
  btItem.addEventListener('click', (event) => {  // add event for each button
    player = event.target.innerText.slice(-1)
    ScoreText[player].innerText++;
    if(ScoreText[player].innerText == maxScore) {
      alerto = document.createElement("div");
      alerto.innerHTML = `Player <strong>${player}</strong> win u fuck !!!`;
      alerto.setAttribute("class", "alert alert-success");
      alerto.setAttribute("role", "alert");
      document.querySelector('#alart').appendChild(alerto);


      ScoreText[player].style.color = 'green';
      for (let btItem of Object.values(bt)) { // disable all button
        btItem.disabled = true;
      }
    }
  });
}

//-------------------------------------------------
btReset.addEventListener('click', (event) => {  // add event for each button
  for (let player in bt) { // disable all button
    bt[player].disabled = false;
    ScoreText[player].style.color = 'black';
    ScoreText[player].innerText = 0;
    document.querySelector('#alart').innerHTML = "";
    document.querySelector("#myDropdown").innerText = maxScore;
  }
});

//-------------------------------------------------
for (let item of document.querySelectorAll(".dropdown-item")) { // return each object
  item.addEventListener('click', (event) => {  // add event for each button
    maxScore = event.target.innerText;
    document.querySelector("#myDropdown").innerText = maxScore;
  });
}

// console.log(bt);

// // get item by type
// let h1 = document.querySelector('h1');
// console.log(h1);

// // link event
// bt.addEventListener('click', myFunction);

// let imgSpace = document.querySelector('#imgSpace');
// console.log(imgSpace);
// //imgSpace.src = "https://assets.codepen.io/123865/dog.png"

// // random int
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// // my super function
// function myFunction() {
//   randomIdx = getRandomInt(c.length);
//   console.log(randomIdx);
//   h1.innerText = c[randomIdx].type;
//   document.querySelector('body').style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
//   //imgSpace.src = b[randomIdx]
//   imgSpace.src = c[randomIdx].url
// }