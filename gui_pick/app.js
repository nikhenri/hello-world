cardImg = ["a3_battle_heimdall_gaze.jpg",
           "a3_battle_heimdall_watch.jpg",
           "a3_battle_loki_poison.jpg",
           "a3_battle_oom_judgment.jpg",
           "a3_battle_thor_ascension.jpg",
           "a3_battle_thor_primacy.jpg",
           "a3_battle_tyr_judgment.jpg",
           "a3_battle_tyr_rage.jpg",
           "a3_monster_soldier_of_hel.jpg",
           "a3_monster_volur_witch.jpg",
           "a3_upgrade_eternal_dragons.jpg",
           "a3_upgrade_loki_wrath.jpg",
           "a3_upgrade_tyr_wrath.jpg",
          ];
text_list = ['op', 'op', 'broken', 'need nerf', 'unbalanced']

drawAllCard();

// ------------------------------------------------------------------------
function drawAllCard() {
  imgContainer = document.querySelector('#imgContainer');
  for (item of cardImg) {
    div = document.createElement('div')
    div.classList.add('imgDiv');
    div.classList.add('CardList');
    div.style.backgroundImage = `url("${item}")`
    div.addEventListener('click', event_click_on_card);
    imgContainer.appendChild(div);
  }
}

// ------------------------------------------------------------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// ------------------------------------------------------------------------
function event_click_on_card (event) {
  // console.dir(this)
  // console.log(event);
  event.target.style.backgroundImage = "";
  event.target.innerText = text_list[getRandomInt(text_list.length)];
  event.target.removeEventListener("click", event_click_on_card);
}

// ------------------------------------------------------------------------