var pageHeader = document.querySelector(".page-header");
var menuToggle = document.querySelector(".page-header__toggle");

pageHeader.classList.remove("page-header--no-js");

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  pageHeader.classList.toggle("page-header--menu-opened");
  pageHeader.classList.toggle("page-header--menu-closed");
});
