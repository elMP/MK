const $arena = document.querySelector(".arenas");
const $form = document.querySelector(".control");
const $randomButton = document.querySelector(".button");
const $chat = document.querySelector(".chat");

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ["head", "body", "foot"];

const logs = {
  start:
    "Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.",
  end: [
    "Результат удара [playerWins]: [playerLose] - труп",
    "[playerLose] погиб от удара бойца [playerWins]",
    "Результат боя: [playerLose] - жертва, [playerWins] - убийца",
  ],
  hit: [
    "[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.",
    "[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.",
    "[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.",
    "[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.",
    "[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.",
    "[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.",
    "[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.",
    "[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.",
    "[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.",
    "[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.",
    "[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.",
    "[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.",
    "[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.",
    "[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.",
    "[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.",
    "[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.",
    "[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.",
    "[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.",
  ],
  defence: [
    "[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.",
    "[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.",
    "[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.",
    "[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.",
    "[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
    "[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
  ],
  draw: "Ничья - это тоже победа!",
};

const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) $tag.classList.add(className);

  return $tag;
};

const createPlayer = (playerObject) => {
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

function elHP() {
  return document.querySelector(".player" + this.player + " .life");
}

function changeHP(count) {
  this.hp -= count;

  if (this.hp < 0) this.hp = 0;
}

function renderHP() {
  $playerLife = this.elHP();
  $playerLife.style.width = this.hp + "%";
}

const player1 = {
  player: 1,
  name: "Tom",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["копье"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
  changeHP,
  renderHP,
  elHP,
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
  changeHP,
  renderHP,
  elHP,
};

const getRandom = (num) => {
  return Math.ceil(Math.random() * num);
};

const showResult = (name) => {
  const $loseTitle = createElement("div", "loseTitle");
  if (name) $loseTitle.innerText = name + "  wins";
  else $loseTitle.innerText = "draw";

  return $loseTitle;
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

const getLogsLine = (type, player1, player2, hitValue) => {
  const date = new Date();
  const time = date.getHours() + ":" + date.getMinutes();

  const { name: AttackName } = player1;
  const { name: DefenceName, hp: DefenceHp } = player2;

  switch (type) {
    case "start":
      return logs[type]
        .replace("[time]", time)
        .replace("[player1]", AttackName)
        .replace("[player2]", DefenceName);
    case "hit":
      return (
        `${time} - ` +
        logs[type][getRandom(logs[type].length) - 1]
          .replace("[playerKick]", AttackName)
          .replace("[playerDefence]", DefenceName) +
        ` -${hitValue} [${DefenceHp}/100]`
      );
    case "defence":
      return (
        `${time} - ` +
        logs[type][getRandom(logs[type].length) - 1]
          .replace("[playerKick]", AttackName)
          .replace("[playerDefence]", DefenceName)
      );
    case "end":
      return logs[type][getRandom(logs[type].length) - 1]
        .replace("[playerWins]", AttackName)
        .replace("[playerLose]", DefenceName);
    case "draw":
      return logs[type];
  }
};

const generateLogs = (type, player1, player2, hitValue) => {
  const text = getLogsLine(type, player1, player2, hitValue);
  const el = `<p>${text}</p>`;
  $chat.insertAdjacentHTML("afterbegin", el);
};

$form.addEventListener("submit", function (event) {
  event.preventDefault();

  const {
    hit: enemyHit,
    defence: enemyDefence,
    value: enemyValue,
  } = enemyAttack();
  const { hit: heroHit, defence: heroDefence, value: heroValue } = heroAttack();

  if (heroDefence !== enemyHit) {
    player1.changeHP(enemyValue);
    player1.renderHP();
    generateLogs("hit", player2, player1, enemyValue);
  } else {
    generateLogs("defence", player2, player1);
  }
  if (heroHit !== enemyDefence) {
    player2.changeHP(heroValue);
    player2.renderHP();
    generateLogs("hit", player1, player2, heroValue);
  } else {
    generateLogs("defence", player1, player2);
  }

  gameEnding();
});

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
generateLogs("start", player1, player2);

const heroAttack = () => {
  const attack = {};
  for (let item of $form) {
    const { name, checked, value } = item;
    if (checked && name == "hit") {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = value;
    }
    if (checked && name == "defence") {
      attack.defence = value;
    }

    item.checked = false;
  }
  return attack;
};

const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
};

const gameEnding = () => {
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
    generateLogs("draw");
  }
};
