function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});
