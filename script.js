document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const imgs = carousel.querySelectorAll("img");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");
    const dotsContainer = carousel.querySelector(".dots");

    if (!imgs.length || !nextBtn || !prevBtn || !dotsContainer) return;

    let index = 0;
    let autoPlay = null;

    imgs[index].classList.add("active");

    imgs.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        goToSlide(i, i > index ? "right" : "left");
      });

      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function cleanSlides() {
      imgs.forEach((img) => {
        img.classList.remove("active", "exit-left", "exit-right");
      });
      dots.forEach((dot) => dot.classList.remove("active"));
    }

    function goToSlide(newIndex, direction = "right") {
      if (newIndex === index) return;

      const current = imgs[index];
      cleanSlides();

      current.classList.add(direction === "right" ? "exit-left" : "exit-right");

      index = newIndex;
      imgs[index].classList.add("active");
      dots[index].classList.add("active");
    }

    function nextSlide() {
      const newIndex = (index + 1) % imgs.length;
      goToSlide(newIndex, "right");
    }

    function prevSlide() {
      const newIndex = (index - 1 + imgs.length) % imgs.length;
      goToSlide(newIndex, "left");
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
    });

    function startAutoPlay() {
      if (autoPlay) return;
      autoPlay = setInterval(nextSlide, 2500);
    }

    function stopAutoPlay() {
      clearInterval(autoPlay);
      autoPlay = null;
    }

    carousel.addEventListener("mouseenter", startAutoPlay);
    carousel.addEventListener("mouseleave", stopAutoPlay);
  });
});

function comprar(producto) {
  const numero = "549XXXXXXXXXX";
  const mensaje = "Hola, quiero consultar por la figura: " + producto;
  const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".carousel img").forEach(img => {

  img.addEventListener("click", () => {

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

  });

});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});