const listOfElements = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listOfElements.length}`);

const categoriesOfArr = [...listOfElements]
  .map(
    (elements) =>
      `Categories: ${elements.children[0].textContent} Elements: ${elements.children[1].children.length}`
  )
  .join("\n");

console.log(categoriesOfArr);
