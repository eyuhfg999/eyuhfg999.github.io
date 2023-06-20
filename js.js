// 获取轮播图容器和小圆点容器
var slideshowContainer = document.querySelector('.slideshow');
var dotsContainer = document.querySelector('.dots-container');

// 获取所有的轮播图片和小圆点
var slides = slideshowContainer.querySelectorAll('img');
var dots = dotsContainer.querySelectorAll('.dot');

// 设置初始索引和自动轮播间隔时间（单位：毫秒）
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

// 自动轮播函数
function nextSlide() {
  goToSlide(currentSlide + 1);
}

// 切换到指定索引的轮播图
function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  slideshowContainer.style.transform = 'translateX(-' + currentSlide * 33.33 + '%)';
}

// 点击小圆点切换到对应的轮播图
dotsContainer.addEventListener('click', function(event) {
  var targetDot = event.target;
  if (targetDot.classList.contains('dot')) {
    var dotIndex = Array.from(dots).indexOf(targetDot);
    if (dotIndex !== -1) {
      goToSlide(dotIndex);
    }
  }
});

// 停止自动轮播
slideshowContainer.addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// 恢复自动轮播
slideshowContainer.addEventListener('mouseout', function() {
  slideInterval = setInterval(nextSlide, 3000);
});