const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
/* 
1. Знаходимо ul з допомогою ID 
2. Створення циклу для перебирання елементів масиву 
3. Створюю елементи списку >>> li
4. Запис тексту з масиву у елемент li 
5. Додаю клас до елемену
6. помістити елементи li в середину елементу ul 
*/

// const ulElem = document.getElementById("ingredients");

// Через метод FOR... OF
// for (const ingredient of ingredients) {
//   const liElem = document.createElement("li");
//   liElem.textContent = ingredient;
//   liElem.classList.add("item");
//   ulElem.appendChild(liElem);
// }

// console.log(ulElem);
//--------------------------------------------------------------------

// Через метод MAP

const ulElem = document.getElementById("ingredients");

ingredients.map((ingridient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingridient;
  liElem.classList.add("item");
  ulElem.appendChild(liElem);
});
// console.log(ulElem);
