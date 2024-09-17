document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.tiny-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        navContainer: '#tiny-slider-nav',
        speed: 1000
    });
  });