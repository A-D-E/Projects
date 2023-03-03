import "./style.css"

const input1 = document.querySelector('#text-input1')
const input2 = document.querySelector('#text-input2')
const btn = document.querySelector('button')
const displaySumme = document.querySelector('#summe')

// btn.onclick = function () {
  
//   displaySumme.innerHTML = +input1.value + +input2.value

//   if (input1.value || input2.value) {
//     input1.value = ''
//     input2.value = ''
//   }
// }
let k
btn.addEventListener('click', function(e){
  e.stopPropagation()
  e.preventDefault()
  k = 9
  console.log(this.innerText = k);
})

input1.addEventListener('keyup', () => {
  console.log(this);
})

const a = true
const b = false
const c = 'Hello'
let d = 5
const e = "7"

if (a == b) console.log(true)
else if(d > c) console.log(false)
else console.log('done')

console.log(a == !b ? 'true' : 'false')

const switchConst = () => {
  switch (true) {
  case a == b:
    console.log(a==b);
    break;
case a != b:
  return 'case2';
  default:
    break;
}}

const arrowF = () => (
  
  console.log('true')
  
  )
arrowF()
// console.log(d)