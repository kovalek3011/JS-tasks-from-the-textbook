// Усечение строки

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    alert(str.substring(0, maxlength - 1) + "...");
  } else {
    alert(str);
  }
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20); // "Вот, что мне хотело…"

truncate("Всем привет!", 20); // "Всем привет!"
