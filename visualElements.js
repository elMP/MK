import { generateLogs } from "./logs.js";

const $randomButton = document.querySelector(".button");
const $arena = document.querySelector(".arenas");

const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) $tag.classList.add(className);

  return $tag;
};

export const createPlayer = (playerObject) => {
  const { player, name, img, hp } = playerObject;
  const $player = createElement("div", "player" + player);
  const $progressbar = createElement("div", "progressbar");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $character = createElement("div", "character");
  const $img = createElement("img");

  $life.style.width = hp + "%";
  $name.innerText = name;
  $img.src = img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
};

const createReloadButton = () => {
  const $reloadDiv = createElement("div", "reloadWrap");
  const $reloadButton = createElement("button", "button");

  $reloadButton.innerText = "Restart";
  $reloadButton.addEventListener("click", function () {
    window.location.reload();
  });

  $reloadDiv.appendChild($reloadButton);
  $arena.appendChild($reloadDiv);
};

const showResult = (name) => {
  const $loseTitle = createElement("div", "loseTitle");
  if (name) $loseTitle.innerText = name + "  wins";
  else $loseTitle.innerText = "draw";

  return $loseTitle;
};

export const gameEnding = (player1, player2) => {
  const { hp: heroHp, name: heroName } = player1;
  const { hp: enemyHp, name: enemyName } = player2;

  if (heroHp === 0 || enemyHp === 0) {
    $randomButton.disabled = true;
    createReloadButton();
  }

  if (heroHp === 0 && heroHp < enemyHp) {
    $arena.appendChild(showResult(enemyName));
    generateLogs("end", player2, player1);
  } else if (enemyHp === 0 && enemyHp < heroHp) {
    $arena.appendChild(showResult(heroName));
    generateLogs("end", player1, player2);
  } else if (enemyHp === 0 && heroHp === 0) {
    $arena.appendChild(showResult());
    generateLogs("draw", player1, player2);
  }
};
