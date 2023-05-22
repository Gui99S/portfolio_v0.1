var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });


let MenuBtn = document.getElementById('menuBtn')
  MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-times')
  });
    

let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')

  window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY + 300
    sections.forEach(section => {
      if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
        navLinks.forEach(link => {
          link.classList.remove('active');
          if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
            link.classList.add('active')
          }
        });
      }
    });
  });