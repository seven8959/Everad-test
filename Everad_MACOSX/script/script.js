// Carousel

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
});

// Full Year

const spanYear = document.getElementById('year');

function getYear() {
    let date = new Date();
    let year = date.getFullYear();
    spanYear.innerHTML = ` ${year}`;
}

getYear()

