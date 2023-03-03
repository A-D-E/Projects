const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')
// console.log(buttons)

// for (let index = 0; index < buttons.length; index++) {
//   const element = buttons[index]

  
// }

// console.log(buttons[16]);

buttons.forEach((btn, i) => {
  btn.addEventListener('click', function(e){
    let inpFirst, inpSecond, operator
    if (isNaN(+this.innerText )) {
      operator = this.innerText
      console.log(operator)
    } else {
      inpFirst = this.innerText
    }

    display.value += inpFirst
  })
})
