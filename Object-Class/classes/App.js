import weather from '../weather'

class App {
  constructor(settings){

    // create elements
    this.settings = settings // get settings
    this.window = document.createElement('div')
    this.document = document.createElement('div')
    this.header = document.createElement('div')
    this.view = document.createElement('div')
    this.footer = document.createElement('div')
    this.buttonArea = document.createElement('div')
    this.buttons = settings.buttonsClasses
    this.html = document.createElement('div')
    

    // add classes

    this.html.classList.add('html')
    this.window.classList.add('window')
    this.document.classList.add('document')
    this.header.classList.add('header')
    this.view.classList.add('view')
    this.footer.classList.add('footer')
    this.buttonArea.classList.add('header__button-area')

    // place in DOM

    this.html.appendChild(this.window)
    this.window.appendChild(this.document)
    this.document.appendChild(this.header)
    this.document.appendChild(this.view)
    this.settings.showFooter && this.document.appendChild(this.footer)
    this.header.appendChild(this.buttonArea)
    this.document.style.backgroundColor = this.settings.documentBg ? this.settings.documentBg : 'beige'
  }

  // parse header buttons
  

  parseBtns(){
    const arr = this.settings.buttonsClasses
    
    arr.map((_, i) => {
      const symbols = this.settings.buttonsSymbols
      const button = document.createElement('button')
      button.classList.add(`header__btn`, arr[i])
      button.innerText = symbols[i]
      this.buttonArea.appendChild(button)
    })
  }

  // footer events 

  async footerEvents(){

    const footerRoot = this.footer
    const mousMoveViewer = document.createElement('span')
    const daylyInfo = document.createElement('span')
    mousMoveViewer.classList.add('footer__mouse-viewer')
    daylyInfo.classList.add('footer__the-date')
    this.settings.daylyInfo && footerRoot.appendChild(daylyInfo)
    this.settings.showMouseData && footerRoot.appendChild(mousMoveViewer)
    daylyInfo.innerText = `Today is: ${new Date().toLocaleDateString()} | Max temperatur: ${ await weather()}`
    this.document.addEventListener('mousemove', function(e){
      const y = e.clientY
      const x = e.clientX
      mousMoveViewer.innerText = `Mouse on X: ${x} | Y: ${y}`
    })
  }
  // app init

  init(){
    this.parseBtns()
    this.footerEvents()
    return document.querySelector('#app').appendChild(this.html)
  }
}

export default App