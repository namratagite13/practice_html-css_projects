var swiper = new Swiper(".mySwiper", {
    slidesPerView:1.1,
    centeredSlides : true,
    spaceBetween: 15,
    lazyLoading: true,
    loop:true,
    keyboard:{
      enabled:true


    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //  renderBullet: function (index, className) {
      //    return '<span class="' + className + '">' + (index + 1) + "</span>";
      //  },
    },
  });