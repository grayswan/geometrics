$(document).ready(() => {
  var name = anime.timeline()
  name
    .add({
      targets: '#first-name .k.el',
      translateY: '15vh',
      easing: 'easeOutExpo',
      offset: 500,
      opacity: [0, 1]
    })
    .add({
      targets: '#first-name .r.el',
      translateY: '15vh',
      easing: 'easeOutExpo',
      offset: 600,
      opacity: [0, 1]
    })
    .add({
      targets: '#first-name .i.el',
      translateY: '15vh',
      easing: 'easeOutExpo',
      offset: 700,
      opacity: [0, 1]
    })
    .add({
      targets: '#first-name .s.el',
      translateY: '15vh',
      easing: 'easeOutExpo',
      offset: 800,
      opacity: [0, 1]
    })
    .add({
      targets: '#first-name .t.el',
      translateY: '15vh',
      easing: 'easeOutExpo',
      offset: 900,
      opacity: [0, 1]
    })
    .add({
      targets: '#first-name .e.el',
      translateY: '15vh',
      easing: 'easeOutExpo',
      offset: 1000,
      opacity: [0, 1]
    })
    .add({
      targets: '#first-name .n.el',
      translateY: '15vh',
      easing: 'easeOutExpo',
      offset: 1100,
      opacity: [0, 1]
    })
    .add({
      targets: '#last-name .swan',
      translateY: '-35vh',
      easing: 'easeOutExpo',
      offset: 1200,
      duration: 3000,
      opacity: [0, 1]
    })
    .add({
      targets: '#last-name .grashel',
      translateY: '-35vh',
      easing: 'easeOutExpo',
      offset: 1200,
      duration: 3000,
      opacity: [0, 1]
    })

  var coverTransform = anime({
    targets: '#cover',
    scale: {
      value: 10,
      duration: 1000,
      easing: 'easeOutQuad'
    }
  })
})

function openCategory() {
}
