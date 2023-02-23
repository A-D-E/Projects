import "./style.css"

const input1 = document.querySelector('#text-input1')
const input2 = document.querySelector('#text-input2')
const btn = document.querySelector('button')
const displaySumme = document.querySelector('#summe')

btn.onclick = function () {
  
  displaySumme.innerHTML = +input1.value + +input2.value

  if (input1.value || input2.value) {
    input1.value = ''
    input2.value = ''
  }
}