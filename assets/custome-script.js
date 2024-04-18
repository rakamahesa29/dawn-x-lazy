document.addEventListener("DOMContentLoaded", function () {

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

  const e = document.querySelectorAll("#imageContainer img"),
    t = document.querySelectorAll(".list-text-item div"),
    s = document.querySelector(".progress-bar");
  e.forEach((e, t) => {
    e.style.display = 0 === t ? "" : "none";
  }),
    gsap.registerPlugin(ScrollTrigger),
    ScrollTrigger.create({
      trigger: ".scroll-container",
      start: "top top",
      end: "bottom bottom",
      scrub: !0,
      onUpdate: (i) => {
        const r = i.progress,
          o = Math.min(Math.floor(r * e.length), e.length - 1);
        e.forEach((e, t) => {
          e.style.display = t === o ? "" : "none";
        });
        const a = Array.from(t).filter((e) => "" !== e.textContent.trim());
        let n = Math.floor(r * a.length);
        (n = Math.min(n, a.length - 1)),
          a.forEach((e) => {
            e.classList.remove("show"), e.classList.add("hide");
          }),
          a[n].classList.add("show"),
          a[n].classList.remove("hide"),
          gsap.to(s, { width: `${100 * r}%`, duration: 0.1 });
      },
    });

  const i = document.querySelector(".area-scroll-trigger"),
    r = document.querySelector(".scroll-container");
  document.querySelector("sticky-header").offsetHeight;
  ScrollTrigger.create({
    trigger: r,
    start: "top-=60 top",
    end: "bottom bottom",
    onEnter: () => i.classList.add("object-stay"),
    onLeave: () => {
      i.classList.add("object-leave"), i.classList.remove("object-stay");
    },
    onEnterBack: () => {
      i.classList.remove("object-leave"), i.classList.add("object-stay");
    },
    onLeaveBack: () => i.classList.remove("object-stay"),
  });

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
});
