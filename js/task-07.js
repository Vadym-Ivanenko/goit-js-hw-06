const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.oninput = function () {
  text.style.fontSize = input.value + "px";
};
