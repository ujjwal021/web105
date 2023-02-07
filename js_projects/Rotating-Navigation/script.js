const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))






// This is just  code how to call a function having return in it

// function add(a, b) {
//     let sum = a + b;
//     return sum
// }

// let x = add(5, 2);
// console.log(x);

// function Add(x1, x2, x3) {
//     let addition = x1 + x2 + x3;
//     return addition;
// }
// let add1 = Add(505, 500, 501);
// console.log(add1);