/*
Вывод односвязного списка в обратном порядке

Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }
//   alert(list.value);
// }

// printReverseList(list);

function printReverseList(list) {
  let arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  for (let value of arr.reverse()) alert(value);
}

printReverseList(list);
