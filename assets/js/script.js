const ele = document.getElementById("ele1");

ele.style.backgroundColor = "green";
ele.style.cursor = "pointer";

ele.addEventListener(
  "click",
  function (color = "yellow") {
    ele.style.backgroundColor = color;
    ele.style.cursor = "default";
  }.bind(null, "yellow"),
);
