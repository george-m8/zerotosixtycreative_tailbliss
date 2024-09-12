document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        navContainer: '#tiny-slider-nav'
        //navPosition: 'bottom'
    });
  });