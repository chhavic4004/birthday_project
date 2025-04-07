let currentIndex = 0;
const slides = [];

window.onload = () => {
  // Load solo and group images (you can customize these)
  const imageList = [
    "solo 1.jpg",
    "solo 3.jpg",
    "solo 4.jpg",
    "solo 5.jpg",
    "solo2.jpg",
    "grp 1.jpg",
    "grp 2.jpg",
    "grp 3.jpg",
    "grp 4.jpg",
    "grp 5.jpg",
    "grp 6.jpg",
    "grp 7.jpg",
  ];

  const container = document.querySelector(".slideshow-container");

  imageList.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slides");
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Memory ${index + 1}`;
    slide.appendChild(img);
    container.appendChild(slide);
    slides.push(slide);
  });

  showSlide(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 2500);
};

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    slide.style.transform = "translateX(100%)";
  });

  slides[index].style.display = "block";
  slides[index].style.animation = "slideIn 1s ease-in-out forwards";
}

// Right-to-left slide animation
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`;
document.head.appendChild(styleSheet);




