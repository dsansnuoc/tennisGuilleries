/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

const mobileMenuIcon = document.querySelector(".dsn-icono-menu");
const menu = document.querySelector(".dsn-menu ul");

mobileMenuIcon.addEventListener("click", function () {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

function toggleMenu() {
  if (window.innerWidth >= 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

window.addEventListener("resize", toggleMenu);

toggleMenu();
