const form = document.getElementById("name-input");
const greet = document.getElementById("name-output");

form.addEventListener("input", (event) => {
  greet.textContent = event.currentTarget.value.trim() || "Anonymous";
});
