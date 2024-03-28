var igswiper = new Swiper(".igSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
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

  var swiperProductSize = new Swiper(".swiperProductSize", {
    slidesPerView: 'auto',
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.addEventListener('DOMContentLoaded', function () {
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Mendapatkan nomor urutan tombol yang diklik
        var buttonIndex = button.getAttribute('data-index');

        // Menghapus kelas active dari semua elemen dengan kelas 'number'
        var numbers = document.querySelectorAll('.number');
        numbers.forEach(function (number) {
          number.classList.remove('active');
          // Menyesuaikan nomor urutan elemen dengan nomor urutan tombol yang diklik
          var numberIndex = number.classList[1].split('-')[1];
          if (numberIndex === buttonIndex) {
            number.classList.add('active');
          }
        });
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#imageContainer img');
    images.forEach((img, index) => {
      img.style.display = index === 0 ? '' : 'none';
    });

    const texts = document.querySelectorAll('.list-text-item p');
    texts.forEach((text, index) => {
      if (text.textContent.trim() !== '') {
        text.classList.add(index === 0 ? 'show' : 'hide');
      } else {
        text.style.display = 'none'; // Sembunyikan paragraf kosong
      }
    });

    const progressBar = document.querySelector('.progress-bar');
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '.scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        const imageIndex = Math.min(Math.floor(scrollProgress * images.length), images.length - 1);
        images.forEach((img, index) => {
          img.style.display = index === imageIndex ? '' : 'none';
        });

        const nonEmptyTexts = Array.from(texts).filter((text) => text.textContent.trim() !== ''); // Filter hanya teks yang tidak kosong
        let currentTextIndex = Math.floor(scrollProgress * nonEmptyTexts.length);
        currentTextIndex = Math.min(currentTextIndex, nonEmptyTexts.length - 1);

        nonEmptyTexts.forEach((text) => {
          text.classList.remove('show');
          text.classList.add('hide');
        });

        nonEmptyTexts[currentTextIndex].classList.add('show');
        nonEmptyTexts[currentTextIndex].classList.remove('hide');

        gsap.to(progressBar, {
          width: `${scrollProgress * 100}%`,
          duration: 0.1,
        });
      },
    });

    const areaScrollTrigger = document.querySelector('.area-scroll-trigger');
    const scrollContainer = document.querySelector('.scroll-container');
    const stickyHeader = document.querySelector('sticky-header');

    // Menentukan tinggi sticky-header untuk menghitung posisi start ScrollTrigger
    const stickyHeaderHeight = stickyHeader.offsetHeight;

    ScrollTrigger.create({
      trigger: scrollContainer,
      start: () => "top+=" + stickyHeaderHeight + " bottom", // Start ketika bagian atas scrollContainer bertemu dengan bagian bawah stickyHeader
      end: 'bottom bottom',
      onEnter: () => areaScrollTrigger.classList.add('object-stay'),
      onLeave: () => {
        areaScrollTrigger.classList.add('object-leave');
        areaScrollTrigger.classList.remove('object-stay');
      },
      onEnterBack: () => {
        areaScrollTrigger.classList.remove('object-leave');
        areaScrollTrigger.classList.add('object-stay');
      },
        onLeaveBack: () => areaScrollTrigger.classList.remove('object-stay'),
        // Pilihan untuk menambahkan object-leave ketika scroll kembali ke atas, jika diperlukan
      // areaScrollTrigger.classList.add('object-leave');
    });
  });

