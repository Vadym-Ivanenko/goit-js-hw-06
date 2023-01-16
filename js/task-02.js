const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.getElementById("ingredients");

ingredients.map((ingridient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingridient;
  liElem.classList.add("item");
  ulElem.appendChild(liElem);
});
