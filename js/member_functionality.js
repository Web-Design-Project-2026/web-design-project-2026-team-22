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

// template loader
// code found on website i cant find again :(
function loadProductInTemplate() {
  // where are uuuuuuuuuuu
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) return;
  let productData;

  // and im so sorryyyyyyyy
  if (productId.startsWith("chr")) {
    productData = characters_array.find((char) => char.id === productId);
  } else if (productId.startsWith("bndl")) {
    productData = bundles_array.find((bundle) => bundle.id === productId);
  }

  // dies
  if (productData) {
    const titleElement = document.querySelector(".product_title");
    const priceElement = document.querySelector(".product_price");
    const imgElement = document.querySelector(".product_large_img");
    const descElement = document.querySelector(".product_description");
    const metaElement = document.querySelector(".product_meta_details");

    const imagePath = productData.picture.replace("../", "");

    if (titleElement) titleElement.textContent = productData.name;
    if (priceElement) priceElement.textContent = `${productData.price} SEK`;
    if (descElement) descElement.textContent = productData.background;
    if (imgElement) {
      imgElement.src = imagePath;
      imgElement.alt = productData.name;
    }
    if (metaElement) {
      const activitiesList = productData.activity
        ? productData.activity.join(", ")
        : "Error";
      const ages = productData.ageRange || "All ages";
      const year = productData.releaseYear || "Unkown";
      metaElement.innerHTML = `
      Activities: ${activitiesList} <br/>
      Ages: ${ages} <br/>
      Year of release: ${year}`;
    }
  }
}

function renderOtherPerformers() {
  const container = document.getElementById("solo_characters");
  if (!container) return;

  container.innerHTML = "";

  characters_array.forEach((char) => {
    const card = document.createElement("a");
    card.className = "character_container";

    card.href = `product_page.html?id=${char.id}`;

    const imagePath = char.picture.replace("../", "");

    card.innerHTML = `
      <div class="character_img_container">
        <img src="${imagePath}" alt="${char.name}" />
      </div>
      <section class="character_txt_container roboto-slab-regular">
        <p>${char.name}</p>
        <p>${char.price} SEK</p>
      </section>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProductInTemplate();
  renderOtherPerformers();
});
