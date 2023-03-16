const arrayMap = ['a', 'b', 'c', 'd']
const arr2 = [1, 'e', '9', 'u', undefined, {a:'a', b:'b'}]
const newArray = [ ...arr2, ...arrayMap]
const redArr = [1,2,3,4,5,6]

const cart = [
  {
    id: 1,
    name: 'Hose',
    price: 25
  },
  {
    id: 2,
    name: 'Shirt',
    price: 80
  },
  {
    id: 1,
    name: 'Rock',
    price: 15
  },
  {
    id: 1,
    name: 'BH',
    price: 250
  },
]

const filter = newArray.filter((val) => val === 'a')
const reduce = cart.reduce((acc, cur) => {
    return acc + cur.price
}, 0)

const of = Array.of('q', 2, false)
console.log(of)

// console.log(reduce)
// const arrObj = [
//   {
//     title: 'A',
//     name: 'b'
//   },
//   {
//     title: 'v',
//     name: 'b'
//   },
//   {
//     title: 'g',
//     name: 'b'
//   },
//   {
//     title: 'A',
//     name: 'b'
//   },
//   {
//     title: 'f',
//     name: 'b'
//   },
//   {
//     title: 'l',
//     name: 'b'
//   },
// ]




// arrObj.map( ({ title, name }) => {
//   console.log(title, name)
// })