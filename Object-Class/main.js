import './style.scss'
import App from './classes/App'
import Browser from './classes/Browser'

const appSettings = {
  buttonsClasses: ['btn-max', 'btn-tray', 'btn-close'],
  buttonsSymbols: ['▢', '-', 'x'],
  documentBg: 'beige',
  viewBg: 'lightblue',
  showFooter: true,
  daylyInfo: true,
  showMouseData: true
}

const newApp = new App(appSettings)

newApp.init()

const browserSettings = {
  buttonsClasses: ['btn-max', 'btn-tray', 'btn-close', 'btn-pipe'],
  buttonsSymbols: ['▢', '-', 'x', '|'],
  documentBg: 'beige',
  viewBg: 'lightblue',
  showFooter: true,
  daylyInfo: true,
  showMouseData: false,
  query: 'slider'
}

const browserApp = new Browser(browserSettings)

browserApp.start()