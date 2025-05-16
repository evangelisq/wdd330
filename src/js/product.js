import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { qs } from "./utils.mjs";

const dataSource = new ProductData("tents");

async function loadProductListing() {
  const tentContainer = qs("#tent-list");
  const tents = await dataSource.getData();

  tents.forEach(tent => {
    if (tent.hasDetailPage) {
      const tentElement = document.createElement("li");
      tentElement.classList.add("product-card");
      tentElement.innerHTML = `
      <a href="product_pages/${tent.Id}.html">
        < img src="${tent_Image}" alt="${tent.Name}" />
        <h3 class="card_brand">${tent.Brand.Name}</h3>
        <h2 class="card_name">${tent.NameWithoutBrand}</h2>
        <p class="product-card_price">$${tent.FinalPrice}</p>
        </a>`;
        tentContainer.appendChild(tentElement);
    }
  });
}

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

document.addEventListener("DOMContentLoaded", loadProductListing);

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
