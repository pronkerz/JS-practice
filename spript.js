'use strict';

// alert('Hello');

// const result = confirm('Do you like apples?');
// console.log(result);

// const answer = prompt('Вам есть 18?', '18');
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Как ваши дела?', '');
// answers[1] = prompt('Что делаете?', '');
// answers[2] = prompt('Какие у вас хобби?', '');

// document.write(answers);

// ОПЕРАТОРЫ

console.log('array' + '- object');
console.log( 4 + '- object');
console.log( 4 + + '5');

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log(8%2);


console.log(2*8 === 9);
console.log(2*4 === 8);
console.log(2*4 === '8');
console.log(2*4 == '8');


const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(!isChecked || isClose);