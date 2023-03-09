/*
Сумма с произвольным количеством скобок

Напишите функцию sum, которая бы работала следующим образом:
*/

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)(2)); // 6
alert(sum(6)(-1)(-2)(-3)); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15

/*
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/
