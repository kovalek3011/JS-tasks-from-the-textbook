/*
Фильтрация уникальных элементов массива

Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/

function unique(arr) {
  let set = new Set(arr);
  let uniqArr = Array.from(set);
  console.log(uniqArr);
  return uniqArr;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare,Krishna,:-O
/*P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений.*/
