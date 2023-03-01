// Сделать первый символ заглавным

function ucFirst(str) {
  alert(str[0].toUpperCase() + str.slice(1));
}

ucFirst("вася") == "Вася";
