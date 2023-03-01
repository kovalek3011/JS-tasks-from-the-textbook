// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
  alert(
    str.toLowerCase().indexOf("viagra") >= 0 ||
      str.toUpperCase().indexOf("XXX") >= 0
  );
}

checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");
