/* Скопировать и отсортировать массив

У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let sorted = arr.slice().sort();
  console.log(sorted);
  console.log(arr);
  return sorted;
}

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)
