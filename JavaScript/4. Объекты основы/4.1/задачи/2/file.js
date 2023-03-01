// Проверка на пустоту

function isEmpty(obj) {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  return !(counter > 0);
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
