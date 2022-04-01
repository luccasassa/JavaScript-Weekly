//Swipers
const swiperVertical = new Swiper(".swiper-v", {
    direction: "vertical",
    slidesPerView: 'auto',
    mousewheel: true,
    spaceBetween: 50,

    // pagination: {
    //     el: ".swiper-pagination",
    //     dynamicBullets: true,
    // },
});

const swiperHorizontal = new Swiper(".swiper-h", {
    spaceBetween: 50,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});