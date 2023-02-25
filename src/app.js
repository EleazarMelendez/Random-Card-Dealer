/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function changeTheCard() {
  const AcetoKing = document.querySelector("#face");
  const TopOfCard = document.querySelector("#top-suite");
  const BottomOfCard = document.querySelector("#bottom-suite");

  const possibleSuites = ["♦", "♥", "♠", "♣"];
  const possibleFaces = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];

  const RandomFaceValue = Math.floor(Math.random() * possibleFaces.length);
  const RandomSuiteValue = Math.floor(Math.random() * possibleSuites.length);

  AcetoKing.innerText = possibleFaces[RandomFaceValue];
  TopOfCard.innerText = possibleSuites[RandomSuiteValue];
  BottomOfCard.innerText = TopOfCard.innerText;

  if (RandomSuiteValue <= 1) {
    AcetoKing.style.color = "red";
    TopOfCard.style.color = "red";
    BottomOfCard.style.color = "red";
  }
}

window.onload = function() {
  changeTheCard();

  let clickyButton = document.getElementById("hitMe");
  clickyButton.addEventListener("click", changeTheCard);
};

setTimeout(function() {
  location = "";
}, 5000);
