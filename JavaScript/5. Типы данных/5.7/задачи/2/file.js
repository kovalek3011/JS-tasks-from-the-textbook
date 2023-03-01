/*Отфильтруйте анаграммы

Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.


nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let value of arr) {
    let key = value.toLowerCase();
    key = key.split("");
    key = key.sort();
    key = key.join("");
    map.set(key, value);
  }
  let uniqArr = Array.from(map.values());
  console.log(uniqArr);
  return uniqArr;
}

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
/*Из каждой группы анаграмм должно остаться только одно слово, не важно какое.*/
