// =============================
// Navbar toggle for mobile view
// =============================
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("showing");
  });
}

// =============================
// Smooth scroll for anchor links
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =============================
// Bubble animation background
// =============================
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 20 + 10 + "px";
  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = Math.random() * 5 + 5 + "s";

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

setInterval(createBubble, 400);

// =============================
// Projects carousel drag scroll
// =============================
const carousel = document.querySelector('.carousel');

if (carousel) {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; 
    carousel.scrollLeft = scrollLeft - walk;
  });
}
function openCertificate(src) {
  document.getElementById("certificateModal").style.display = "flex";
  document.getElementById("certificateImg").src = src;
}
function closeCertificate() {
  document.getElementById("certificateModal").style.display = "none";
}

