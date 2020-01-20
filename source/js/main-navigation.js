var menuOpen = document.querySelector(".main-navigation__open");
var menuClose = document.querySelector(".main-navigation__close");
var menu = document.querySelector(".main-navigation__list");
var clientWidth = document.body.clientWidth;

var mobileMenu = function() {
  menuClose.classList.add("main-navigation__show");

  if (clientWidth < 768) {
    menu.classList.add("main-navigation__hidden");
  };

  menuOpen.addEventListener("click", function (evt) {
    menu.classList.remove("main-navigation__hidden");
  });

  menuClose.addEventListener("click", function (evt) {
    menu.classList.add("main-navigation__hidden");
  });
};

mobileMenu();
