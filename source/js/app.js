const mainMenu = document.querySelector(".main-nav__list");
const menuToggle = document.querySelector(".main-nav__toggle");

menuToggle.addEventListener("click", function () {
  if (mainMenu.classList.contains("main-nav__list--closed")) {
    mainMenu.classList.remove("main-nav__list--closed");
    mainMenu.classList.add("main-nav__list--opened");
  } else {
    mainMenu.classList.remove("main-nav__list--opened");
    mainMenu.classList.add("main-nav__list--closed");
  };
});
