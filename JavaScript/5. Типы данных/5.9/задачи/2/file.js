/*
Подсчёт количества свойств объекта

Напишите функцию count(obj), которая возвращает количество свойств объекта:
*/

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  let res = Object.keys(obj).length;
  console.log(res);
  return res;
}

alert(count(user)); // 2
/*Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/
