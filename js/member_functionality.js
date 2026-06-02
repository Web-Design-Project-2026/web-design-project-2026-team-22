/* i want to have so that in every bundle and image there is metadata
bundles metadata would include separate members list

all of them would include categories like: 
name
price
amount of members
size
perfect for (activity)
background
ages
year of release
series

these are in data.js (i done goofed with image metadata uwu)

when on catalogue and product page members, i want metadata to be pulled from image to fill its sibling text boxes with relevant data
when on cart, i want only name and price displayed

important data:
name
price
activity filter
is it a bundle?
if yes: member links
fluff-data (includes info abt everything)*/

//need a window to popup during start, remember it was picked and then show filtered items

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
