const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("open");
});


document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("open");
  });
});


const projects = document.querySelectorAll(".project");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

projects.forEach(project => {
  revealObserver.observe(project);
});


const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxTitle = lightbox.querySelector(".lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");

document.querySelectorAll(".image-button").forEach(button => {

  button.addEventListener("click", () => {

    const image = button.dataset.image;
    const title = button.dataset.title;

    lightboxImage.src = image;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  });

});


function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


lightboxClose.addEventListener("click", closeLightbox);


lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});


document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});


window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});