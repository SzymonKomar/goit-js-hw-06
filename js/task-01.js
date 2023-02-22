const list = document.getElementById("categories");
const itemList = list.children;
const itemCountMessage = `Number of categories: ${itemList.length}`;
console.log(itemCountMessage);

for (var i = 0; i < itemList.length; i += 1) {
  let headerSelect = list.querySelectorAll("h2");
  let headerSelectContent = headerSelect[i].textContent;
  let itemListItems = itemList.item(i);
  let itemListListItems = itemListItems.querySelectorAll("li");
  let itemsLength = itemListListItems.length;
  console.log(`    Category: ${headerSelectContent}
    Elements: ${itemsLength}`);
}
