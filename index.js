const header = document.querySelector(".header");
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const mainNavLink = document.querySelectorAll(".main-nav-link:link");

console.log(mainNavLink);

btnMobileNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

mainNavLink.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
});
