const inputEl = document.querySelector("#validation-input");
const inputLeng = Number(inputEl.dataset.length);
console.log(inputLeng);

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputLeng) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
});
