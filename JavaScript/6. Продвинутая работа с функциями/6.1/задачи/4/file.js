/*Вывод односвязного списка

Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
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

/*
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/

// function printList(list) {
//   alert(list.value);

//   if (list.next) {
//     printList(list.next);
//   }
// }

// printList(list);

function printList(list) {
  while (list) {
    alert(list.value);
    list = list.next;
  }
}

printList(list);

//в бльшинстве случаев цикл всегда лучше
