/*
Сколько сегодня прошло секунд?

Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday() {
  let date = new Date();
  let secDay =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  console.log(secDay);
  return secDay;
}

alert(getSecondsToday());
