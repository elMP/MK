const player1 = {
  name: "Tom",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["копье"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const player2 = {
  name: "Harry",
  hp: 15,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["wand"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

function createPlayer(playerClass, playerObject) {
  const $arena = document.querySelector(".arenas");

  const $player = document.createElement("div");
  $player.classList.add(playerClass);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = playerObject.hp + "%";

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = playerObject.name;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");

  const $img = document.createElement("img");
  $img.src = playerObject.img;
  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $arena.appendChild($player);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
