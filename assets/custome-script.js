var igswiper = new Swiper(".igSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        425: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
  });

  var swiperreview = new Swiper(".swiperReview", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swipercustomeslider = new Swiper(".customesliderSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("imageContainer");
    // Mengambil semua gambar yang di-render oleh Shopify Liquid
    const images = container.querySelectorAll('img');
  
    // Sembunyikan semua gambar kecuali yang pertama
    images.forEach((img, index) => {
      img.style.display = index === 0 ? '' : 'none'; // Tampilkan gambar pertama sebagai default
    });
  
    const texts = document.querySelectorAll(".list-text-item p");
    // Sembunyikan semua teks kecuali yang pertama
    gsap.set(texts, { autoAlpha: 0 });
    if (texts.length > 0) {
      gsap.to(texts[0], { autoAlpha: 1 }); // Tampilkan teks pertama
    }
  
    const progressBar = document.querySelector(".progress-bar");
    gsap.registerPlugin(ScrollTrigger);
  
    ScrollTrigger.create({
      trigger: ".scroll-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const scrollProgress = self.progress; // Nilai dari 0.0 hingga 1.0
        const imageIndex = Math.min(Math.floor(scrollProgress * images.length), images.length - 1);
  
        // Sembunyikan semua gambar dan tampilkan yang sesuai dengan scrollProgress
        images.forEach((img, index) => {
          img.style.display = index === imageIndex ? '' : 'none';
        });
  
        // Tentukan teks mana yang harus ditampilkan
        let currentTextIndex = Math.floor(scrollProgress * texts.length);
        currentTextIndex = currentTextIndex >= texts.length ? texts.length - 1 : currentTextIndex;
  
        gsap.to(texts, { autoAlpha: 0, duration: 0.1 }); // Sembunyikan semua teks
        gsap.to(texts[currentTextIndex], { autoAlpha: 1, duration: 0.1 }); // Tampilkan teks yang relevan
  
        // Memperbarui lebar progress bar
        gsap.to(progressBar, {
          width: `${scrollProgress * 100}%`,
          duration: 0.1,
        });
      },
    });
  
    const areaScrollTrigger = document.querySelector(".area-scroll-trigger");
    const scrollContainer = document.querySelector(".scroll-container");
  
    // ScrollTrigger untuk mengatur kelas object-stay dan object-leave
    ScrollTrigger.create({
      trigger: scrollContainer,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => areaScrollTrigger.classList.add("object-stay"),
      onLeave: () => {
        areaScrollTrigger.classList.add("object-leave");
        areaScrollTrigger.classList.remove("object-stay");
      },
      onEnterBack: () => {
        areaScrollTrigger.classList.remove("object-leave");
        areaScrollTrigger.classList.add("object-stay");
      },
      onLeaveBack: () => areaScrollTrigger.classList.remove("object-stay"),
    });
  });
  