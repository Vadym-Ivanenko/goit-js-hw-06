/* 
1. Знаходжу інпут і оутпут з допомогою ID
2. Вішаю слухача подій на інпут
3. Перезаписую значення в отпуті при введенні значення в інпут 
*/

const form = document.getElementById("name-input");
const greet = document.getElementById("name-output");

form.addEventListener("input", (event) => {
  greet.textContent = event.currentTarget.value.trim() || "Anonymous";
});
