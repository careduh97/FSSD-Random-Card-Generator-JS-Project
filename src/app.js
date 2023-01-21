/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suits = ["♦", "♥", "♠", "♣"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  //Codigo para generador de cartas aleatorio

  const suitRandom = Math.floor(Math.random() * suits.length);
  const valueRandom = Math.floor(Math.random() * values.length);

  function cardGenerator(suitIndex, valueIndex) {
    let topSuitResult = document.querySelector("#topsuit");
    let valueResult = document.querySelector("#number");
    let bottomSuitResult = document.querySelector("#bottomsuit");
    topSuitResult.innerHTML = suits[suitIndex];
    valueResult.innerHTML = values[valueIndex];
    bottomSuitResult.innerHTML = suits[suitIndex];
    if (suitIndex == 0 || suitIndex == 1) {
      let cardColor = document.querySelector("#totalCard");
      cardColor.style.color = "red";
    }
  }

  cardGenerator(suitRandom, valueRandom);

  //Codigo para botón de nueva carta

  let cardButton = document.querySelector("#cardGenerator");
  cardButton.addEventListener("click", function(event) {
    location.reload();
  });

  //Codigo para timer de 10seg para nueva carta

  let timerButton = document.querySelector("#cardTimer");
  timerButton.addEventListener("click", function(event) {
    let timeleft = 10;
    let timerBar = setInterval(function() {
      if (timeleft <= 0) {
        clearInterval(timerBar);
      }
      document.getElementById("progressBar").value = 11 - timeleft;
      timeleft--;
      console.log(timeleft);
    }, 1000);

    window.setTimeout(function() {
      window.location.reload();
    }, 10000);
  });
};

//♦♥♠♣
