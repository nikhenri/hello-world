cardImg = [
          
           "a3_battle_heimdall_watch.jpg",
           "a3_battle_loki_poison.jpg",
           "a3_battle_thor_ascension.jpg",
           "a3_battle_oom_judgment.jpg",
           "a3_battle_thor_primacy.jpg",
           "a3_battle_tyr_rage.jpg",
           "a3_battle_tyr_judgment.jpg",
           "a3_battle_heimdall_gaze.jpg",

           "a3_monster_mystic_troll.jpg",
           "a3_monster_soldier_of_hel.jpg",
           "a3_monster_volur_witch.jpg",
           "a3_monster_frost_giant.jpg",
           "a3_monster_ymir.jpg",
           
           "a3_upgrade_eternal_dragons.jpg",
           "a3_upgrade_master_in_arts.jpg",
           "a3_upgrade_lord_of_spears.jpg",
           
           "a3_upgrade_loki_wrath.jpg",
           "a3_upgrade_tyr_wrath.jpg",
           "a3_upgrade_frigga_domain.jpg",
           "a3_upgrade_frigga_sacrifice.jpg",
           "a3_upgrade_odin_throne.jpg",
           "a3_upgrade_thor_chosen.jpg",
           "a3_upgrade_thor_conquest.jpg",

           "a3_quest_alfheim.jpg",
           "a3_quest_jotumheim.jpg",
           "a3_quest_manheim.jpg",
           "a3_quest_yggorasil.jpg",
           "a3_quest_widespread.jpg",
           "a3_quest_glorious_death.jpg",
          ];
text_list = ['op', 'op', 'broken', 'unbalanced']

mp3 = ["duck1.mp3", "duck2.mp3", "duck3.mp3"];

drawAllCard();
addAudio();

// ------------------------------------------------------------------------
function addAudio() {
  for (item of mp3) {
    audio = document.createElement('audio');
    src = document.createElement('source');
    src.src = item;
    src.type = "audio/mpeg";
    audio.appendChild(src);
    document.body.appendChild(audio);
  }
}

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
  audio = document.querySelectorAll('audio')[getRandomInt(mp3.length)];
  audio.play();
}

// ------------------------------------------------------------------------