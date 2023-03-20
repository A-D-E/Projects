import App from "./App"

class Browser extends App{

  constructor(document, header, view, footer, buttonArea, buttons){
    super(document, header, view,footer, buttonArea, buttons)
  }

  concatButtons(){
    return [...this.buttons, 'new-btn']
  }

  start(){
    this.parseBtns()
    this.footerEvents()
    return document.querySelector('#app').appendChild(this.html)
  }
}

export default Browser