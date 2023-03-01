// Вопрос об "if"

if (-1 || 0) alert("first"); // Выполнится. true

if (-1 && 0) alert("second"); // Не выполнится. false

if (null || (-1 && 1)) alert("third"); // Выполнится. && выше приоритет чем ||
