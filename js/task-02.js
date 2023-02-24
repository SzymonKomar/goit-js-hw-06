const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let ingrArray = [];
let ulSelector = document.getElementById("ingredients");
ingredients.forEach((element) => {
  var createLi = document.createElement("li");
  createLi.className = "item";
  createLi.textContent = element;
  ingrArray.push(createLi);
});
ulSelector.append(...ingrArray);
