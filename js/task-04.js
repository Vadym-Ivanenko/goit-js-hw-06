/* 
1. Знаходжу інкремент + декремент з допомогою data-action
2. знаходжу value з допомогою ID
3. Cтворюю об'єкт котрий буде додавати чи віднімати 1
4. Вішаю слухача на кнопки 
5. перезаписую значення в value
*/

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.getElementById("value");

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementBtn.addEventListener("click", () => {
  counter.increment();
  valueRef.textContent = counter.value;
});
decrementBtn.addEventListener("click", () => {
  counter.decrement();
  valueRef.textContent = counter.value;
});
