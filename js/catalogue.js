//update array
function updateCart(currentCartArray) {
  const cartJson = JSON.stringify(currentCartArray);
  localStorage.setItem("shoppingCart", cartJson);
}

//decrypt array
function loadCart() {
  const savedCart = localStorage.getItem("shoppingCart");
  return savedCart ? JSON.parse(savedCart) : [];
}

// function to generate character cards
// solution found and adjusted from all over stacks-overflow, theres like 10 diff things here
function renderCharacters() {
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
      <section class="character_txt_container">
        <p>${char.name}</p>
        <p>${char.price} SEK</p>
      </section>
      `;

    container.appendChild(card);
  });
}

function renderBundles() {
  const container = document.getElementById("bundles");
  if (!container) return;

  container.innerHTML = "";

  bundles_array.forEach((bundle) => {
    const article = document.createElement("article");
    article.className = "bundle_container";

    const imagePath = bundle.picture.replace("../", "");

    article.innerHTML = `
      <a href="product_page.html?id=${bundle.id}">
        <img src="${imagePath}" alt="${bundle.name}" />
        <section class="bundle_txt_container">
          <p>${bundle.name}</p>
          <p>${bundle.price} SEK</p>
        </section>
      </a>
    `;
    container.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCharacters();
  renderBundles();
});
