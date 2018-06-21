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
      translateY: [10, 10],
      easing: 'easeInOutQuad',
      opacity: [0, 1],
      duration: 1500
    })

  var coverTransform = anime({
    targets: '#cover',
    delay: 100,
    scale: {
      value: 10.5,
      duration: 1000,
      easing: 'easeOutQuad'
    }
  })
})

{
  class Item {
		constructor(el, options) {
      this.DOM = {el: el}

      this.options = {  
        image: {
          translation: {x: -10, y: -10, z: 0},
          rotation: {x: 0, y: 0, z: 0}
        },
        title: {
          translation : {x: 20, y: 10, z: 0}
        },
        text: {
          translation : {x: 20, y: 50, z: 0},
          rotation : {x: 0, y: 0, z: -20}
        },
        deco: {
          translation : {x: -20, y: 0, z: 0},
          rotation : {x: 0, y: 0, z: 3}
        },
        shadow: {
          translation : {x: 30, y: 20, z: 0},
          rotation : {x: 0, y: 0, z: -2},
          reverseAnimation : {duration: 2, ease: 'Back.easeOut'}
        },
        content: {
          translation : {x: 5, y: 3, z: 0}
        }
      };
      Object.assign(this.options, options)

      this.DOM.animatable = {};
      this.DOM.animatable.image = this.DOM.el.querySelector('.box__img')
      this.DOM.animatable.title = this.DOM.el.querySelector('.box__title')
      this.DOM.animatable.text = this.DOM.el.querySelector('.box__text')
      this.DOM.animatable.deco = this.DOM.el.querySelector('.box__deco')
      this.DOM.animatable.shadow = this.DOM.el.querySelector('.box__shadow')
      this.DOM.animatable.content = this.DOM.el.querySelector('.box__content')
    }
  }
  class Overlay {
    constructor() {
      this.DOM = {el: document.querySelector('.overlay')}
      this.DOM.reveal = this.DOM.el.querySelector('.overlay__reveal')
      this.DOM.items = this.DOM.el.querySelectorAll('.overlay__item')
      this.DOM.close = this.DOM.el.querySelector('.overlay__close')
    }
    show(contentItem) {
      this.contentItem = contentItem
      this.DOM.el.classList.add('overlay--open')
      // show revealer
      TweenMax.to(this.DOM.reveal, .5, {
        ease: 'Power1.easeInOut',
        x: '0%',
        onComplete: () => {
          // hide scroll
          document.body.classList.add('preview-open')
          // show preview
          this.revealItem(contentItem)
          // hide revealer
          TweenMax.to(this.DOM.reveal, .5, {
            delay: 0.2,
            ease: 'Power3.easeOut',
            x: '-100%'
          })

          this.DOM.close.style.opacity = 1
        }
      })
    }
    revealItem() {
      this.contentItem.style.opacity = 1

      let itemElems = [];
      itemElems.push(this.contentItem.querySelector('.overlay__content'))
        
    }
    hide() {
      this.DOM.el.classList.remove('overlay--open')

      // show revealer
      TweenMax.to(this.DOM.reveal, .5, {
        //delay: 0.15,
        ease: 'Power3.easeOut',
        x: '0%',
        onComplete: () => {
          this.DOM.close.style.opacity = 0
          // show scroll
          document.body.classList.remove('preview-open')
          // hide preview
          this.contentItem.style.opacity = 0
          // hide revealer
          TweenMax.to(this.DOM.reveal, .5, {
            delay: 0,
            ease: 'Power3.easeOut',
            x: '100%'
          })
        }
      })
    }
  }

  class Grid {
    constructor(el) {
      this.DOM = {el: el}
      this.items = []
      Array.from(this.DOM.el.querySelectorAll('a.grid__item')).forEach((item) => {
        const itemObj = new Item(item)
        this.items.push(itemObj)
        if ( !item.classList.contains('grid__item--noclick')) {
          itemObj.DOM.el.addEventListener('click', (ev) => {
            ev.preventDefault()
            this.openItem(document.querySelector(item.getAttribute('href')))
          })
        }
      })

      this.overlay = new Overlay()
      this.overlay.DOM.close.addEventListener('click', () => this.closeItem())
    }
    openItem(contentItem) {
      if (this.isPreviewOpen) return
      this.isPreviewOpen = true
      this.overlay.show(contentItem)
    }
    closeItem() {
      if (!this.isPreviewOpen) return
      this.isPreviewOpen = false
      this.overlay.hide()
    }
  }
  new Grid(document.querySelector('.grid'))
}
