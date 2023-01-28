const waterBubble = document.querySelector(".water-bubble");

document.addEventListener("mousemove", e => {
  waterBubble.style.left = `${e.clientX - 10}px`;
  waterBubble.style.top = `${e.clientY - 10}px`;
});

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

//Appearing animation for about section
const animatedContentAbout = document.querySelector(".about");
const observerAbout = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animatedContentAbout.classList.add("in-view");
    observerAbout.unobserve(animatedContentAbout);
  }});
observerAbout.observe(animatedContentAbout);

//Appearing animation for skills section
const animatedContentSkills = document.querySelector(".skills");
const observerSkills = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animatedContentSkills.classList.add("in-view");
    observerSkills.unobserve(animatedContentSkills);
  }});
observerSkills.observe(animatedContentSkills);

//Appearing animation for services section
const animatedContentServices = document.querySelector(".services");
const observerServices = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animatedContentServices.classList.add("in-view");
    observerServices.unobserve(animatedContentServices);
  }
});
observerServices.observe(animatedContentServices);

//Appearing animation for contact section
const animatedContentContact = document.querySelector(".contact");
const observerContact = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animatedContentContact.classList.add("in-view");
    observerContact.unobserve(animatedContentContact);
  }
});
observerContact.observe(animatedContentContact);

//Appearing animation for projects section
const animatedContentProjects = document.querySelector(".projects");
const observerProjects = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animatedContentProjects.classList.add("in-view");
    observerProjects.unobserve(animatedContentProjects);
  }
});
observerProjects.observe(animatedContentProjects);







