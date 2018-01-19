$(window).scroll(() => {

  var CSStransforms = anime({
    targets: '#top .el',
    translateY: '50vh',
    rotate: '.5turn',
    easing: 'easeOutQuad',
    borderTopColor: '#C4094E',
    perspective:  1200
  });

  var CSStransforms = anime({
    targets: '#right .el',
    translateX: '50vw',
    rotate: '.5turn',
    easing: 'easeOutQuad',
    perspective:  1200
  });

  var CSStransforms = anime({
    targets: '#bottom .el',
    translateY: '50vh',
    rotate: '.5turn',
    easing: 'easeOutQuad',
    borderBottomColor: '#FF4444',
    perspective:  1200
  });

  $('footer').addClass('show')
})
