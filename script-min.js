// 1.Напиши всі можливі варіанти створення функцій.
// 1) функція декларація
// function myFunction() {
//   тіло функції
// }

// 2) функція-вираз
// const myFunction = function() {
//   тіло функції
// };

// 3) стрілочна функція
// const myFunction = () => {
//   тіло функції
// };

// --------------------------------------------------------------------------------------------------------------------------------
// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function countNumbers(...numbers) {
  console.log(numbers.length);
}

countNumbers(1, 2, 3, 4, 5);

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// Факторіал натурального числа — добуток натуральних чисел від одиниці до
// n включно, позначається n!.

function getFactorial(someNumber) {
  const correctNumber =
    !isNaN(someNumber) && someNumber > 0 && someNumber % 1 === 0;

  if (correctNumber === true) {
    let multiplication = 1;
    for (let index = 1; index <= someNumber; index++) {
      multiplication *= index;
    }
    console.log(multiplication);
  } else {
    console.log("Enter positive integer.");
  }
}

getFactorial(5);

// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// стрілочна функція

let getRectangleArea = (width, height = width) => width * height;

console.log(getRectangleArea(5, 15));
