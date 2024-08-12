let saveColorIdPrincipal = "";
let saveColorIdSecondary = "";
let createDiv = false;
const divKeyId = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    saveColorIdPrincipal = "pink";
  } else if (event.key === "s" || event.key === "S") {
    saveColorIdPrincipal = "orange";
  } else if (event.key === "d" || event.key === "D") {
    saveColorIdPrincipal = "skyblue";
  } else if (event.key === "q" || event.key === "Q") {
    saveColorIdSecondary = "purple";
    addElementDiv();
  } else if (event.key === "w" || event.key === "W") {
    saveColorIdSecondary = "grey";
    addElementDiv();
  } else if (event.key === "e" || event.key === "E") {
    saveColorIdSecondary = "brown";
    addElementDiv();
  }
  divKeyId.style.backgroundColor = saveColorIdPrincipal;
});

function addElementDiv() {
  if (!createDiv) {
    createDiv = true;
    const containerPrincipal = document.getElementById("containerPrincipal");
    const newElement = document.createElement("div");
    newElement.id = "divExtra";
    newElement.textContent = "div agregado";
    newElement.style.backgroundColor = saveColorIdSecondary;
    newElement.style.width = "200px";
    newElement.style.height = "200px";
    newElement.style.border = "2px solid black";
    newElement.style.marginTop = "10px";
    containerPrincipal.appendChild(newElement);
  } else {
    let divKeyExtraId = document.querySelector("#divExtra");
    divKeyExtraId.style.backgroundColor = saveColorIdSecondary;
  }
}
