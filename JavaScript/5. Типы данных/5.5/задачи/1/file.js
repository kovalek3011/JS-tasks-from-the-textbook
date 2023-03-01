// Переведите текст вида border-left-width в borderLeftWidth

/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") // 'backgroundColor';
camelize("list-style-image") // 'listStyleImage';
camelize("-webkit-transition") // 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

function camelize(str) {
  let arr = str.split("-");
  let arrFinal = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      arrFinal.push(arr[i]);
    } else {
      arrFinal.push(arr[i][0].toUpperCase() + arr[i].substring(1));
    }
  }
  console.log(arrFinal.join(""));
  return arrFinal.join("");
}

camelize("background-color"); // 'backgroundColor';
camelize("list-style-image"); // 'listStyleImage';
camelize("-webkit-transition"); // 'WebkitTransition';
