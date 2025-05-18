

new Swiper("#swiper-2",{
    slidesPerView:1.5,
    centeredSlides : true,
    spaceBetween: 34,
    lazyLoading: true,
    loop:true,
    keyboard:{
        enabled:true
    },
    pagination: {
        el: ("#swiper-2 .swiper-custom-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class= ${className}>
          <span class= "number">${index + 1}</span>
          </div>
          ` ;
        },
    },
})