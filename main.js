const $arena = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Tom",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["копье"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Harry",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["wand"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) $tag.classList.add(className);

  return $tag;
}

function createPlayer(playerObject) {
  const $player = createElement("div", "player" + playerObject.player);
  const $progressbar = createElement("div", "progressbar");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $character = createElement("div", "character");
  const $img = createElement("img");

  $life.style.width = playerObject.hp + "%";
  $name.innerText = playerObject.name;
  $img.src = playerObject.img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

function changeHP(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= 20;
  if (player.hp < 0) player.hp = 0;
  $playerLife.style.width = player.hp + "%";

  if (player.hp === 0) {
    $arena.appendChild(playerLose(player.name));
  }
}

function playerLose(name) {
  const $loseTitle = createElement("div", "loseTitle");
  $loseTitle.innerText = name + " lose";

  return $loseTitle;
}

$randomButton.addEventListener("click", function () {
  console.log("random fight");

  changeHP(player1);
  changeHP(player2);
});

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
