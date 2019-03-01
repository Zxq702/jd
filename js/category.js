(function(window){
    var swiper = new Swiper('.category-left .swiper-container', {
      // 垂直方向滑动
        direction: 'vertical',
        // 让多行一起滑动(必要参数)
        slidesPerView: 'auto',
        // 添加惯性,用力滑动一次的距离拉长
        freeMode: true,

        // 上下滑动滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },

        // 是否需要鼠标滚轮
        mousewheel: true,
      });

      var swiper2 = new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,

        // 是否需要鼠标滚轮
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // }

        // 上下滑动滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });

    // 
  
})(window)