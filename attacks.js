import { getRandom } from "./utils.js";
const $form = document.querySelector(".control");

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ["head", "body", "foot"];

export const heroAttack = () => {
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

export const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
};
