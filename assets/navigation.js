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

function triggerMenuHide(event) {
  if (nav && !nav.contains(event.target)) {
    menuHide();
  }
}

// hide menu when focus is off of the menu button or page links
document.addEventListener(
  "focusin",
  function (event) {
    triggerMenuHide(event);
  },
  true
);

// hide menu when click is outside the navigation
document.addEventListener(
  "click",
  function (event) {
    triggerMenuHide(event);
  },
  true
);
