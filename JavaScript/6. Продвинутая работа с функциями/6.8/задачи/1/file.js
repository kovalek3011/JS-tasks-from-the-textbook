/*
Вывод каждую секунду

Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

// function printNumbers(from, to) {
//   let start = from;
//   let timerId = setInterval(function () {
//     alert(start);
//     if (start == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

function printNumbers(from = 0, to = 10) {
  alert(from);
  from++;
  if (from <= to) {
    setTimeout(printNumbers, 1000, from, to);
  }
}

printNumbers(4, 8);
