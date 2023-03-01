// Подмассив наибольшей суммы
/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/
"use strict";

let arr = [-1, 2, 3, -9, 11];

function getMaxSubSum(arr) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum < 0) {
        continue;
      } else if (sum > max) {
        max = sum;
      }
    }
    sum = 0;
  }
  if (max > 0) {
    console.log(max);
    return max;
  } else {
    console.log(0);
    return 0;
  }
}

getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([2, -1, 2, 3, -9]); // 6
getMaxSubSum([-1, 2, 3, -9, 11]); // 11
getMaxSubSum([-2, -1, 1, 2]); // 3
getMaxSubSum([100, -9, 2, -3, 5]); // 100
getMaxSubSum([1, 2, 3]); // 6
getMaxSubSum([-1, -2, -3]); // 0
