// import {
//   ucFirst,
//   removingSpaces,
//   counterWord,
//   counterUniqueWord,
// } from "./modules.js";
// с таким импортом работает только через live server

// 1.1
alert(`Готово!\n\n${ucFirst(
  prompt(
    "1.1 Введите произвольную строку, я преобразую ее к нижнему регистру, а первую букву сделаю большой!",
    "пРоИзВоЛьНаЯ СтРоКа"
  )
)}
  `);
// 1.2
alert(
  `Готово!\n\n${removingSpaces(
    prompt(
      "1.2 Введи произвольную строку, я уберу лишние и поставлю недостающие пробелы!",
      "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."
    )
  )}`
);
// 1.3
alert(
  `Готово!\n\n${counterWord(
    prompt(
      "1.3 Введи произвольную строку, я посчитаю кол-во слов",
      "Произвольная   строка,состоящая   из шести слов."
    )
  )}`
);
// 1.4
alert(
  `Готово!\n${counterUniqueWord(
    prompt(
      "1.4 Введи произвольную строку, я посчитаю количество уникальных слов",
      "Текст, в котором слово текст несколько раз встречается и слово тоже"
    )
  )}`
);
