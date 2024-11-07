//DOM elements
const menuButton = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");
const sectionHeroEl = document.querySelector(".section-hero");

//Copyright year
document.querySelector(".year").textContent = new Date().getFullYear();

//Menu button toggle
menuButton.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//smooth nav
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href");
    if (id === "#") window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (id.startsWith("#") & (id !== "#"))
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    //close menu
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//sticky nav

const observer = new IntersectionObserver(
  function (entries) {
    document.body.classList.toggle("sticky", !entries[0].isIntersecting);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
