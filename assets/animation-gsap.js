document.addEventListener("DOMContentLoaded", function () {
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
