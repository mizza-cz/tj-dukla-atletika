const gallerySwiper = document.querySelector(".gallerySwiper");
if (gallerySwiper) {
  new Swiper(".gallerySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: `swiper-pagination-bullet`,
      bulletActiveClass: "bullet-active",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}
