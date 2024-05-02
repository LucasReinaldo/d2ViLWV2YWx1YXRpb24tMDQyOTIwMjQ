/*
 * Shopping Cart Requirements:
 * - Before you start, please run `npm run start:api` to start mock API server
 * - data for mock APIs come from ./db/db.json
 * - There are 2 APIs you need to call:
 *     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
 *     - http://localhost:4002/products : this will provide a list of products with full details
 *
 * We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
 * product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
 * inside table#shopping-cart-tbl as below:
 * ID     Item
 * 1001   TV
 * 1002   iPad
 *
 * */

const fetchCart = async () => {
  const response = await fetch("http://localhost:4002/cart");
  const data = await response.json();
  return data;
};

const fetchProducts = async () => {
  const response = await fetch("http://localhost:4002/products");
  const data = await response.json();
  return data;
};

const View = {
  init: () => {
    const tbodyElem = document
      .getElementById("shopping-cart-tbl")
      .querySelector("tbody");

    const renderCart = async () => {
      const cart = await fetchCart();
      const products = await fetchProducts();

      cart.forEach((c) => {
        const product = products.find((p) => p.id === c.id);

        const trElem = document.createElement("tr");
        const tdIdElem = document.createElement("td");
        const tdItemElem = document.createElement("td");

        tdIdElem.textContent = product.id;
        tdItemElem.textContent = product.name;

        trElem.appendChild(tdIdElem);
        trElem.appendChild(tdItemElem);
        tbodyElem.appendChild(trElem);
      });
    };

    renderCart();
  },
};
document.addEventListener("DOMContentLoaded", View.init);
