(function(window){
    // 当前页面滚动的时候,
    // 判断当前滚动距离是否在轮播图的高度范围内,
    // 在范围内,就计算当前滚动的距离,对应背景色透明度改变.
    // 计算透明度=滚动的距离/轮播图高度
    // 最后把透明度的值赋值给rgba
    window.addEventListener('scroll',function(){
        // var scrollTop = document.documentElement.scrollTop;
        // var scrollTop = document.body.scrollTop;
        // 获取滚动出去的距离
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        // console.log(scrollTop);
        // 获取轮播图高度
        var slideHeight = document.querySelector('#slide').offsetHeight;
        // console.log(slideHeight);
        // 判断滚动的距离是否小于轮播图高度,计算透明值
        if(scrollTop<slideHeight){
            var opacity = scrollTop/slideHeight;
            // console.log(opacity);
            
            document.querySelector('#header').style.backgroundColor = 'rgba(222,24,27,'+opacity+')';
        }else{
            document.querySelector('#header').style.backgroundColor = 'rgb(222,24,27)';
        }
    });

    // 2.倒计时功能
    //   1.准备一个2小时的倒计时,
    //   2.每隔一秒,总时间--,
    //   3.求出--之后的时分秒;
    //   4.把时分秒的十位各位显示到对应的span里面

    // 1.准备倒计时的总时长
    var time = 2*60*60;

    // 4.1获取所有的span标签
    // var spans = document.querySelectorAll('span');
    var spans = document.querySelectorAll('.seckill-time span');
    // console.log(spans);
    // 2.定义一个定时器,让总时间每隔一秒--
    setInterval(function(){
        time--;
        // 3.1获取时间的小时
        var hour = Math.floor(time/60/60);
        // console.log(hour);
        // 3.2获取时间的分钟
        var minute = Math.floor(time%3600)/60;
        // console.log(minute);
        // 3.3获取时间的秒
        var second = time%60;
        // console.log(second);
        // 4.2把时分秒的十位各位显示到对应的span里面
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);  
        
    },1000)
       
    // 轮播图的使用  
    /*  3. 首页轮播图使用swiper插件 
         1. 引包 引入样式 引入js
         2. 写结构
         3. 修改样式
         4. 初始化 */    
    new Swiper ('.swiper-container', {
        direction: 'horizontal', //水平切换选项
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 添加自动播放的功能
        autoplay: true,
        autoplay: {
            delay: 2000,
            // 是否在轮播到最后一张停下来 loop模式下无效 true就会停下来 false不停
            stopOnLastSlide: false,
            // 当手触摸滑动后是否要禁止自动轮播图 true禁止 false不禁止
            disableOnInteraction: false,
        },

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });
})(window)