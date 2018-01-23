$(document).ready(() => {

  var CSStransforms = anime({
    targets: '#top .el',
    rotate: '1turn',
    translateY: '15vh',
    easing: 'easeOutQuad',
    borderTopColor: '#C4094E',
    scale: .50,
    delay: 2000
  });

  var CSStransforms = anime({
    targets: '#right .el',
    translateY: '50vh',
    translateX: '-25vw',
    rotate: '.75turn',
    easing: 'easeOutQuad',
    borderRightColor: '#E5E5E5',
    scale: .25,
    delay: 2000
  });

  var CSStransforms = anime({
    targets: '#bottom .el',
    translateY: '-5vh',
    rotate: '.5turn',
    easing: 'easeOutQuad',
    borderBottomColor: '#FF4444',
    delay: 2000
  });

  var CSStransforms = anime({
    targets: '#name .el',
    translateY: '-35vh',
    translateX: '30vw',
    delay: 500,
    easing: 'easeOutQuad'
  });

})
