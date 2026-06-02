/* i want nav and footer be insertable in every page */

/*find holders */
function load_nav_and_footer() {
  const nav_holder = document.querySelector("nav");
  const footer_holder = document.querySelector("footer");

  /* fetch the files that have nav and footer inner html and if failed give error */
  fetch("nav.html")
    .then((response) => {
      if (!response.ok) throw new Error("Nav not found");
      return response.text();
    })
    /*take inner html of nav.js and put into the holder*/
    .then((data) => {
      nav_holder.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error", error);
    });

  fetch("footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("Footer not found");
      return response.text();
    })
    /*same as above*/
    .then((data) => {
      footer_holder.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

// function call, DO NOT DELETE
load_nav_and_footer();
