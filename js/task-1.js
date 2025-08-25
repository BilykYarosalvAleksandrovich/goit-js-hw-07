const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item-animals");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector(".subtitle-animals").textContent;
  const elementsCount = item.querySelectorAll(".item-card-animals").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
