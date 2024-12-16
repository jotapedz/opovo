const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let counter = 0;
const itemWidth = carouselItems[0].offsetWidth + 20;  // Width of each item plus its margin

nextButton.addEventListener('click', () => {
    if(counter < carouselItems.length -1){
        counter++;
      carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
    }
});

prevButton.addEventListener('click', () => {
     if (counter > 0) {
         counter--;
        carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
    }
});