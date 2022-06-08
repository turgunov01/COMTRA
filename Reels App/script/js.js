document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        loop: true,
        duration: 5000,
        speed: 2000,
        transition: 200,
        autoplay: {
            delay: 3000,
        },
    
        slidesPerView: 1,
    
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    
    var card = document.querySelector('.card');
    var slider = new Swiper('.card-slider', {
        duration: 5000,
        speed: 2500,
        transition: 500,
        autoHeight: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            0: {
                loop: true,
                centeredSlides: true,
                spaceBetween: 20,
                slidesPerView: '1',
            },    
            550: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

    const langElem = document.querySelector('.language');
    if (langElem) {
        langElem.addEventListener('click', function () {
            langElem.classList.toggle('active')
        });
    }
});






