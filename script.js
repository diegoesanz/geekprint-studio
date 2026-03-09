document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const imgs = carousel.querySelectorAll("img");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    if (!imgs.length || !nextBtn || !prevBtn) return;

    let index = 0;
    imgs[index].classList.add("active");

    nextBtn.addEventListener("click", function () {
      imgs[index].classList.remove("active");
      index = (index + 1) % imgs.length;
      imgs[index].classList.add("active");
    });

    prevBtn.addEventListener("click", function () {
      imgs[index].classList.remove("active");
      index = (index - 1 + imgs.length) % imgs.length;
      imgs[index].classList.add("active");
    });
  });
});

function comprar(producto) {
  const numero = "549XXXXXXXXXX";
  const mensaje = "Hola, quiero consultar por la figura: " + producto;
  const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}