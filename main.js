const player1 = {
  name: "Tom",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["копье"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const player2 = {
  name: "Harry",
  hp: 15,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["wand"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

function createPlayer(playerClass, playerName, lifeCount) {
  const $arena = document.querySelector(".arenas");

  const $player = document.createElement("div");
  $player.classList.add(playerClass);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = lifeCount + "%";

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = playerName;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");

  const $img = document.createElement("img");
  $img.src = "http://reactmarathon-api.herokuapp.com/assets/liukang.gif";
  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $arena.appendChild($player);
}

createPlayer("player1", "SCORPION", 13);
createPlayer("player2", "SUB-ZERO", 45);
