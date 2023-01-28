// Парс числа з Number.parseInt() 
// і Number.parseFloat()

let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);
// ............

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);

// ...........
// Метод число .toFixed(digits)
// Матрьошки на прикладі console.log(Number(число, toFixed(digits)));
//
let salary = 1300.16472;
salary = Number(salary.toFixed(3));

// console.log(salary);

// ...........

// Переводимо (переобразовуємо) в число з Number(value)
// Значення NaN (Not a Number) і метод Number.isNaN(value)
// 
let quantity = '30';
let value = 'Цю строку неможливо перевести в число';

// console.log(Number(value));

// .............
// Обєкт Math
// - Піднесення до степені
// - Exponent operator

const base = 2;
const power = 4;

// const result = Math.pow(base, power);
// console.log(base ** power);


// ..............

// Генеруємо псевдовипадкове число
// - Math.random()
// - Math.round()

// const max = 10;
// const min = 5;

// const result = Math.round((Math.random() * (max - min) + min));

// console.log(result);
// console.log(Math.random() * (max - min) + min);

// Number.random() * (max - min) + min;


// ..............


//Приклад використання
// const colors = ['tomato', 'orange', 'blue', 'deeppink'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round((Math.random() * (max - min) + min));

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;




