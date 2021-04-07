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

player1.attack();
player2.attack();
