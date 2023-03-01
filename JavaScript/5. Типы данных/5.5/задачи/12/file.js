/*
Оставить уникальные элементы массива
важность: 4
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

function unique(arr) {
  let uniqArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqArr.includes(arr[i])) {
      uniqArr.push(arr[i]);
    }
  }
  console.log(uniqArr);
  return uniqArr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O
