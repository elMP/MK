const $arena = document.querySelector(".arenas");
const $control = document.querySelector(".control");
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
  changeHP: changeHP,
  renderHP: renderHP,
  elHP: elHP,
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
  changeHP: changeHP,
  renderHP: renderHP,
  elHP: elHP,
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

function elHP() {
  return document.querySelector(".player" + this.player + " .life");
}

function changeHP(count) {
  this.hp -= count;

  if (this.hp < 0) this.hp = 0;
}

function renderHP($playerLife) {
  $playerLife.style.width = this.hp + "%";
}

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

function showResult(name) {
  const $loseTitle = createElement("div", "loseTitle");
  if (name) $loseTitle.innerText = name + "  wins";
  else $loseTitle.innerText = "draw";

  return $loseTitle;
}

function createReloadButton() {
  $reloadDiv = createElement("div", "reloadWrap");
  $reloadButton = createElement("button", "button");

  $reloadButton.innerText = "Restart";
  $reloadButton.addEventListener("click", function () {
    window.location.reload();
  });

  $reloadDiv.appendChild($reloadButton);
  $control.appendChild($reloadDiv);
}

$randomButton.addEventListener("click", function () {
  player1.changeHP(getRandom(20));
  player2.changeHP(getRandom(20));

  player1.renderHP(player1.elHP());
  player2.renderHP(player2.elHP());

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp)
    $arena.appendChild(showResult(player2.name));
  else if (player2.hp === 0 && player2.hp < player1.hp)
    $arena.appendChild(showResult(player1.name));
  else if (player2.hp === 0 && player2.hp === 0)
    $arena.appendChild(showResult());
});

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
