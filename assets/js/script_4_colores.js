const divOne = document.getElementById("divIdOne");
const divTwo = document.getElementById("divIdTwo");
const divThree = document.getElementById("divIdThree");
const divFour = document.getElementById("divIdFour");

function backgroundColorBlack(elementId) {
  elementId.srcElement.style.backgroundColor = "black";
  elementId.srcElement.style.cursor = "default";
  elementId.srcElement.style.color = "white";
}

divOne.addEventListener("click", backgroundColorBlack);
divTwo.addEventListener("click", backgroundColorBlack);
divThree.addEventListener("click", backgroundColorBlack);
divFour.addEventListener("click", backgroundColorBlack);
