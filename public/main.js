$(document).ready(() => {
  
  //Kristen//
  TweenMax.to(".k", 1, {color: "#E23923", ease:Power2.easeInOut}).delay(2)
  TweenMax.to(".r", 1, {color: "#E5E239", ease:Power2.easeInOut}).delay(2.5)
  TweenMax.to(".i", 1, {color: "#E86C9A", ease:Power2.easeInOut}).delay(3)
  TweenMax.to(".s", 1, {color: "#A9DFAC", ease:Power2.easeInOut}).delay(3.5)
  TweenMax.to(".t", 1, {color: "#C4094E", ease:Power2.easeInOut}).delay(4)
  TweenMax.to(".e", 1, {color: "#178F5F", ease:Power2.easeInOut}).delay(4.5)
  TweenMax.to(".n", 1, {color: "#F99372", ease:Power2.easeInOut}).delay(5)

  //Swan Grashel//
  TweenMax.to(".w", 1, {color: "#C4094E", ease:Power2.easeInOut}).delay(2)
  TweenMax.to(".g", 1, {color: "#E23923", ease:Power2.easeInOut}).delay(2.5)
  TweenMax.to(".r", 1, {color: "#E5E239", ease:Power2.easeInOut}).delay(3)
  TweenMax.to(".a", 1, {color: "#178F5F", ease:Power2.easeInOut}).delay(3.5)
  TweenMax.to(".h", 1, {color: "#C4094E", ease:Power2.easeInOut}).delay(4)
  TweenMax.to(".e", 1, {color: "#178F5F", ease:Power2.easeInOut}).delay(4.5)
  TweenMax.to(".l", 1, {color: "#C4094E", ease:Power2.easeInOut}).delay(5)


  TweenMax.to(".disappear", 1, {opacity: 0, ease:Power2.easeInOut}).delay(8)
  
  TweenMax.to(".g", 1, {x:"-220px", ease:Power2.easeInOut}).delay(8)
  TweenMax.to(".last.r", 1, {x:"-220px", ease:Power2.easeInOut}).delay(8)
  TweenMax.to(".transition-left.a", 1, {x:"-220px", ease:Power2.easeInOut}).delay(8)
  TweenMax.to(".y", 1, {opacity: 1, color: "#F37057", x:"8px", ease:Power2.easeInOut}).delay(8)
  TweenMax.to(".last.s", 1, {x:"320px", ease:Power2.easeInOut}).delay(8)
  TweenMax.to(".last.w", 1, {x:"320px", ease:Power2.easeInOut}).delay(8)
  TweenMax.to(".transition-right.a", 1, {x:"320px", ease:Power2.easeInOut}).delay(8)
  TweenMax.to(".last.n", 1, {x:"320px", ease:Power2.easeInOut}).delay(8)

  //title//
  TweenMax.to(".title", 1, {color: "#CD2F7B", ease:Power2.easeInOut}).delay(6.5)

  //border//
  TweenMax.to(".border", 3, {backgroundColor: "#E23923", ease:Power2.easeInOut}).delay(7.5)
  
  //category title//
  TweenMax.to(".category__title", 1, {color: "#178F5F", ease:Power2.easeInOut}).delay(6.5)

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

