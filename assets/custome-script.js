document.addEventListener("DOMContentLoaded", function () {
  const textIconSize = document.getElementById("textIconSize");
  const closePopup = document.getElementById("closePopUp");
  const popUpSize = document.querySelector(".pop-up-size");
  if (textIconSize && popUpSize) {
    textIconSize.addEventListener("click", function () {
      popUpSize.classList.add("active");
      document.body.appendChild(popUpSize);
      document.body.style.overflow = "hidden";
    });
  }
  if (closePopup && popUpSize) {
    closePopup.addEventListener("click", function () {
      popUpSize.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
  const header = document.querySelector(".header-wrapper-custome");
  function checkScroll() {
    if (window.scrollY > 80) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }
  window.addEventListener("scroll", checkScroll);
  new Swiper(".igSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      280: { slidesPerView: 2, spaceBetween: 20 },
      425: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    },
  }),
    new Swiper(".kolSwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      breakpoints: {
        280: { slidesPerView: 2, spaceBetween: 20 },
        425: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      },
    }),
    new Swiper(".swiperReviewProduct", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    }),
    new Swiper(".swiperReview", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      breakpoints: {
        280: { slidesPerView: 1, spaceBetween: 20 },
        425: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      },
    }),
    new Swiper(".customesliderSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
    new Swiper(".swiperProductSize", {
      slidesPerView: "auto",
      spaceBetween: 8,
      pagination: { el: ".swiper-pagination", clickable: !0 },
    });
  document.querySelectorAll(".accordion-button").forEach(function (e) {
    e.addEventListener("click", function () {
      var t = e.getAttribute("data-index");
      document.querySelectorAll(".number").forEach(function (e) {
        e.classList.remove("active"),
          e.classList[1].split("-")[1] === t && e.classList.add("active");
      });
    });
  });
});
