$(document).ready(() => {
  
  //Kristen//
  const nameTimeline = new TimelineMax({repeat: -1, repeatDelay:5}).restart(2)
    nameTimeline.add(TweenLite.to(".name", .5, {opacity: 0, ease:Elastic.easeOut}).delay(.5))
    nameTimeline.add(TweenLite.to(".name", 1, {opacity: 1, ease:Elastic.easeIn}).delay(.5))
  
  //page transition//
  {
    class Item {
      constructor(el, options) {
        this.DOM = {el: el}
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
    
})

