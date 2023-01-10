const navbar = document.querySelector("#NavBar");
let fixed = navbar.offsetTop;
function stickyNavbar() {
  if (window.scrollY >= fixed) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickyNavbar);
