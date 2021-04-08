const player1 = {
  name: "Tom",
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: "копье",
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const player2 = {
  name: "Harry",
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: "wand",
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

function createPlayer() {
  const $arena = document.querySelector(".arenas");

  const $player = document.createElement("div");
  $player.classList.add("player1");

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressBar");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = "100%";
  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = "Tom";
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
player1.attack();
player2.attack();
createPlayer();
