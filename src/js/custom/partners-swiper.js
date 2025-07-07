const partnersSwiper = document.querySelector(".partners-swiper");
if (partnersSwiper) {
  new Swiper(".partners-swiper", {
    loop: true,
    navigation: false,
    noSwipingClass: "swiper-slide",
    slidesPerView: "8",
    speed: 6000,
    slidesPerView: "auto",
    spaceBetween: 22,
    //  allowTouchMove: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
