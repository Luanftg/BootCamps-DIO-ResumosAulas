$('.owl-carousel').owlCarousel({
    video: true,
    merge: true,
    lazyLoad: true,
    loop: true,
    center: true,
    margin: 10,
    nav: true,
    autoPlay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
console.log(owl);