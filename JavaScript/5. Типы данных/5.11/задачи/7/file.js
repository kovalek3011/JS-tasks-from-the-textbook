/*
Сколько секунд осталось до завтра?

Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
  let date = new Date();
  let secDay =
    86400 - (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
  console.log(secDay);
  return secDay;
}

alert(getSecondsToTomorrow());
