/* 
День недели в европейской нумерации

В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
*/

let date = new Date(2012, 0, 3); // 3 января 2012 года
alert(getLocalDay(date)); // вторник, нужно показать 2

function getLocalDay(date) {
  let daysWeek = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    0: 7,
  };
  let day = date.getDay();
  console.log(daysWeek[day]);
  return daysWeek[day];
}
