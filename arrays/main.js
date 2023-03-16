import text from './text.json'
const pre = document.querySelector('pre')
const display = document.querySelector('.display')
const btns = document.querySelectorAll('.btn')
const items = [...document.querySelector('.wrap').children]

items.forEach( (el, i) => {
  // display.innerHTML += `${el.id} `
})

btns.forEach(( btn, i) => {
  let method = ''
  btn.addEventListener('click', function(e){
    method = this.getAttribute('data-method')
    method ? display.innerHTML = method : ''
    runMethod(method)
  })
})

function runMethod(method) {
  switch (method) {
    case 'slice':
      display.innerHTML = getTextByMethod(method)
      const tempSliceArr = items.slice(4).map(node => node.innerText)
      pre.innerHTML = JSON.stringify(tempSliceArr, null, 2)
      items.replaceChildren(...items.slice(0, items.length - 4))
      break;
    case 'splice':
      console.log('splice')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'shift':
      console.log('shift')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'unshift':
      console.log('unshift')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'sort':
      console.log('sort')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'pop':
      console.log('pop')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'push':
      console.log('push')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'join':
      console.log('join')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'includes':
      console.log('includes')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'indexOf':
      console.log('indexOf')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    case 'reverse':
      display.innerHTML = getTextByMethod(method)
      const tempReverseArr = items.slice(4).map(node => node.innerHTML).reverse()
      pre.innerHTML = JSON.stringify(tempReverseArr, null, 2)
      const mainElem = document.getElementById('wrap')
      const childNodes = Array.from(mainElem.children)
      const last4Elements = childNodes.slice(-4)
      console.log(last4Elements)
      last4Elements.reverse().forEach(n => mainElem.appendChild(n))
      break;
    case 'split':
      console.log('split')
      pre.innerHTML = method
      display.innerHTML = getTextByMethod(method)
      break;
    default:
      display.innerHTML = 'no method selected'
      break;
  }
}

function getTextByMethod (id){
  return text[id]
}