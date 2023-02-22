let valueSelect = document.getElementById("value");
var counterValue = 0;
const buttonIncrease = document.querySelector(
  `button[data-action="increment"]`
);
const buttonDecrease = document.querySelector(
  `button[data-action="decrement"]`
);
const increaseFunction = () => {
  counterValue += 1;
  valueSelect.innerText = counterValue;
  return;
};
const decreaseFunction = () => {
  counterValue -= 1;
  valueSelect.innerText = counterValue;
  return;
};
buttonIncrease.addEventListener("click", increaseFunction);
buttonDecrease.addEventListener("click", decreaseFunction);
