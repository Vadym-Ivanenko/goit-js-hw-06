const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

/* 
1. Знаходжу ul з допомогою класу 
2. Перебираю елементи з допомогою MAP
3. Створюю елемент li з класом gallery-item
4. В середину li додаю елемент img з класом gallery-item__img
5. Додаю до img - src + alt з масиву image
6. поміщаю елемент li в ul
7. Додаю оформлення в CSS 
*/

const ulElem = document.querySelector(".gallery");

const imagesList = images
  .map(
    (image) =>
      `<li class="gallery-item"><img class="gallery-item__img" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

ulElem.insertAdjacentHTML("beforeend", imagesList);
