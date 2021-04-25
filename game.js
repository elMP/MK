import { generateLogs } from "./logs.js";
import { createPlayer, gameEnding } from "./visualElements.js";
import { Player } from "./players.js";
import { heroAttack, enemyAttack } from "./attacks.js";

export class Game {
    start = () => {
        const $arena = document.querySelector(".arenas");
        const $form = document.querySelector(".control");

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
          
            gameEnding(player1, player2);
          });
          
        const player1 = new Player({
            player : "1",
            name: "Tom",
            hp: 100,
            img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif"
          });
          const player2 = new Player({
            player : "2",
            name: "Harry",
            hp: 100,
            img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif"
          });
          
          $arena.appendChild(createPlayer(player1));
          $arena.appendChild(createPlayer(player2));
          generateLogs("start", player1, player2);
    }
}
