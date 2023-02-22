const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingrSelect = document.getElementById("ingredients");
ingredients.forEach((element) => {
  var createLi = document.createElement("li");
  createLi.className = "item";
  createLi.textContent = element;
  ingrSelect.append(createLi);
});
