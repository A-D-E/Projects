import App from "./App"

class Browser extends App{

  constructor(document, header, view, footer, buttonArea, buttons, query = 'app'){
    super(document, header, view,footer, buttonArea, buttons)

    this.query = query

  }


  start(){
    this.parseBtns()
    this.footerEvents()
    
    return document.getElementById(this.query)
  }
}

export default Browser