/* Сумма введённых чисел

Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

function sumInput() {
  let arr = [];
  arrAdd: while (true) {
    let num = prompt("Введи число", "");
    if (Number(num)) {
      arr.push(+num);
    } else break arrAdd;
  }
  let add = function (arr) {
    return arr.reduce((a, b) => a + b, 0);
  };
  let sum = add(arr);
  console.log(sum);
  return sum;
}

alert(sumInput());
