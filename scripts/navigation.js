var menuButton = document.querySelector("#db-menu-button"),
  menu = document.querySelector("#db-site-menu"),
  nav = document.querySelector("#db-site-navigation");

if (menu && menuButton) {
  menuHide();
  menuButton.addEventListener("click", menuToggle, false);
}

function menuToggle(event) {
  if (event.target.getAttribute("aria-expanded") == "false") {
    menuShow();
  } else {
    menuHide();
  }
}

function menuShow() {
  menu.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
}

function menuHide() {
  menu.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
}

document.addEventListener(
  "focusin",
  function () {
    const active = document.activeElement;
    if (active.id !== "db-menu-button" && active.className !== "db-page-link") {
      menuHide();
    }
  },
  true
);

document.addEventListener("click", function (event) {
  if (!nav.contains(event.target)) {
    menuHide();
  }
});
