// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// isNan - is Not a Number!!!!; !isNan number --number;

// function findPerfectNumber(number) {
//   const positiveInteger = !isNaN(number) && number > 0 && number % 1 === 0;

//   if (positiveInteger === true) {
//     let result = 0;

//     for (let index = 1; index < number; index++) {
//       if (number % index === 0) {
//         result += index;
//       }
//     }
//     console.log(result === number);
//   } else {
//     console.log("Enter positive integer");
//   }
// }

// findPerfectNumber(28);

// 2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

// function getPerfectNumbers(minNumber, maxNumber) {
//   const positiveInteger =
//     !isNaN(minNumber, maxNumber) &&
//     maxNumber > 0 &&
//     minNumber > 0 &&
//     maxNumber > minNumber &&
//     maxNumber % 1 === 0 &&
//     minNumber % 1 === 0;

//   if (positiveInteger === true) {
//     for (let item = minNumber; item <= maxNumber; item++) {
//       let res = 0;

//       for (let index = 1; index < item; index++) {
//         if (item % index === 0) {
//           res += index;
//         }
//       }
//       if (res === item) {
//         console.log(item);
//       }
//     }
//   } else {
//     console.log(
//       "Enter correct integers. maxNumber must be bigger than minNumber."
//     );
//   }
// }

// getPerfectNumbers(1, 1000);
