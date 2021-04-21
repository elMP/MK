export const player1 = {
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

export const player2 = {
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

function elHP() {
  return document.querySelector(".player" + this.player + " .life");
}

function changeHP(count) {
  this.hp -= count;

  if (this.hp < 0) this.hp = 0;
}

function renderHP() {
  const $playerLife = this.elHP();
  $playerLife.style.width = this.hp + "%";
}
