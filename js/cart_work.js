document.addEventListener("DOMContentLoaded", function () {
  // product
  const bookButton = document.querySelector(".book_button");

  // where
  if (bookButton) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // add button first
    if (productId) {
      bookButton.addEventListener("click", function () {
        let currentProduct;
        // check what are we and where to find us
        if (productId.startsWith("chr")) {
          currentProduct = characters_array.find(
            (char) => char.id === productId,
          );
        } else if (productId.startsWith("bndl")) {
          currentProduct = bundles_array.find(
            (bundle) => bundle.id === productId,
          );
        }
        // if we screw it
        if (!currentProduct) {
          console.error("Product data not found for ID:", productId);
          return;
        }

        // cart saving
        const savedCart = localStorage.getItem("shoppingCart");
        let currentCartArray = savedCart ? JSON.parse(savedCart) : [];
        const cleanImgPath = currentProduct.picture.replace("../", "");

        let cartItem = {
          id: currentProduct.id,
          name: currentProduct.name,
          picture: cleanImgPath,
          price: currentProduct.price,
          activity: currentProduct.activity,
          background: currentProduct.background,
          ageRange: currentProduct.ageRange,
          releaseYear: currentProduct.releaseYear,
        };

        currentCartArray.push(cartItem);

        localStorage.setItem("shoppingCart", JSON.stringify(currentCartArray));
        bookButton.textContent = "Booked";
        bookButton.style.backgroundImage = "url('../assets/small_leaf.png')";
      });
    }
  }

  // cart
  const cartContainer = document.getElementById("cart_container");
  if (cartContainer) {
    function renderCart() {
      const savedCart = localStorage.getItem("shoppingCart");
      let currentCartArray = savedCart ? JSON.parse(savedCart) : [];

      cartContainer.innerHTML = "";

      if (currentCartArray.length === 0) {
        cartContainer.innerHTML =
          "<p style='grid-column: 1/-1; text-align: center;'>Your basket is empty.</p>";
        return;
      }

      currentCartArray.forEach((item, index) => {
        const itemElement = document.createElement("figure");
        itemElement.className = "item dark_container";

        itemElement.innerHTML = `
          <img src="${item.picture}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.price} SEK</p>
          <button class="leafy_button remove_button" data-index="${index}">
            <p class="roboto-slab-regular remove_text">Remove</p>
          </button>
        `;

        cartContainer.appendChild(itemElement);
      });

      attachRemoveListeners();
    }

    function attachRemoveListeners() {
      const removeButtons = document.querySelectorAll(".remove_button");
      removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const itemIndex = this.getAttribute("data-index");

          const savedCart = localStorage.getItem("shoppingCart");
          let currentCartArray = savedCart ? JSON.parse(savedCart) : [];

          currentCartArray.splice(itemIndex, 1);

          localStorage.setItem(
            "shoppingCart",
            JSON.stringify(currentCartArray),
          );
          renderCart();
        });
      });
    }

    const clearCartButton = document.querySelector(".clear_cart");
    if (clearCartButton) {
      clearCartButton.addEventListener("click", function () {
        localStorage.setItem("shoppingCart", JSON.stringify([]));
        renderCart();
      });
    }

    renderCart();
  }
});
