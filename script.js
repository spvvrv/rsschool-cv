(function () {
  let burgerItem = document.querySelector(".burger");
  let menu = document.querySelector(".header__navigation");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks =
    document.querySelectorAll(
      ".header__link"
    ); /*Убрать меню при клике на ссылку на маленьких устройствах*/
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
      });
    }
  }
})();
