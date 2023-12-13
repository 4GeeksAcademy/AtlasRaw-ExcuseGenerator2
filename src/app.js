import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

//let generateExcuse = () => {
//let who = ["A racoon", "The president", "My dog"];
//let action = ["eat my", "threw my", "cook my"];
//let what = ["homework", "food", "grandma"];
//let when = ["yesterday", "the other day", "today"];

//let whoIndx = Math.floor(Math.random() * who.length);
//let actionIndx = Math.floor(Math.random() * action.length);
//let whatIndx = Math.floor(Math.random() * what.length);
//let whenIndx = Math.floor(Math.random() * when.length);

//return (
//who[whoIndx] +
//" " +
//action[actionIndx] +
//" " +
//what[whatIndx] +
//" " +
//when[whenIndx]
//);
//};

//MEJORA CODIGO->

const getRandomIndex = array => Math.floor(Math.random() * array.length);
let generateExcuse = () => {
  let who = ["A racoon", "The president", "My dog"];
  let action = ["eat my", "threw my", "cook my"];
  let what = ["homework", "food", "grandma"];
  let when = ["yesterday", "the other day", "today"];

  let whoIndex = getRandomIndex(who);
  let actionIndex = getRandomIndex(action);
  let whatIndex = getRandomIndex(what);
  let whenIndex = getRandomIndex(when);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};
