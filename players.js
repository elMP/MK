export class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
  }

  elHP = () => {
    return document.querySelector(".player" + this.player + " .life");
  }

  changeHP = (count) => {
    this.hp -= count;

    if (this.hp < 0) this.hp = 0;
  }

  renderHP = () => {
    const $playerLife = this.elHP();
    $playerLife.style.width = this.hp + "%";
 }

}