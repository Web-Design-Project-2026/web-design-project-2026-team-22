window.onload = function () {
  const data = JSON.parse(localStorage.getItem("clicked_item"));
};
switch (true) {
  case bundles_array:
  //load members
  //load standard info
  default:
  //load standard info
}

// when we press add we add the shit from clicked_item to cart array as an item
// first we parse the cart array, then we push new item and then we stringify the cart back
let items_in_cart = json.parse(localStorage.getItem("items_in_cart")) || [];

add_button.addEventListener("click", add_function);

function add_button() {
  //adding all the data
  //let item = {all the data};
  //items_in_cart.push(item);
  localStorage.setItem("items_in_cart", JSON.stringify(items_in_cart));
}
