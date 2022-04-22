$('.owl-carousel').owlCarousel({
    loop: true,
    video: true,
    center: true,
    margin: 10,
    nav: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
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