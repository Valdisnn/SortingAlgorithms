"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const mainStringInput = document.getElementById("mainString");
  const subStringInput = document.getElementById("subString");
  const result = document.getElementById("result");
  const resetButton = document.getElementById("resetButton");
  const stringLengthDisplay = document.getElementById("stringLengthDisplay");

  // нижний регистр
  function toLowerCase(str) {
    const upperToLower = {
      А: "а", Б: "б", В: "в", Г: "г", Д: "д", Е: "е", Ё: "ё", Ж: "ж", З: "з", И: "и", Й: "й", К: "к", Л: "л", М: "м", Н: "н", О: "о", П: "п", Р: "р", С: "с", Т: "т", У: "у", Ф: "ф", Х: "х", Ц: "ц", Ч: "ч", Ш: "ш", Щ: "щ", Ъ: "ъ", Ы: "ы", Ь: "ь", Э: "э", Ю: "ю", Я: "я",
      A: "a", B: "b", C: "c", D: "d", E: "e", F: "f", G: "g", H: "h", I: "i", J: "j", K: "k", L: "l", M: "m", N: "n", O: "o", P: "p", Q: "q", R: "r", S: "s", T: "t", U: "u", V: "v", W: "w", X: "x", Y: "y", Z: "z"
    };
    
    let lowerStr = "";
    for (let char of str) {
      lowerStr += upperToLower[char] || char;
    }
    return lowerStr;
  }

  // Поиск подстроки
  function findSubstring(mainString, subString) {
    const mainLength = calculateLength(mainString);
    const subLength = calculateLength(subString);

    for (let i = 0; i <= mainLength - subLength; i++) {
      let found = true;
      for (let j = 0; j < subLength; j++) {
        if (mainString[i + j] !== subString[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
    return -1;
  }

  // Вычисление длины строки
  function calculateLength(str) {
    let length = 0;
    for (let x of str) {
      length++;
    }
    return length;
  }

  // Отображение длины вводимой строки
  mainStringInput.addEventListener("input", () => {
    const length = calculateLength(mainStringInput.value);
    stringLengthDisplay.textContent = `Длина строки: ${length}`;
  });

  // Обработка формы
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mainString = toLowerCase(mainStringInput.value);
    const subString = toLowerCase(subStringInput.value);

    // Поиск подстроки
    const position = findSubstring(mainString, subString);

    if (position !== -1) {
      result.textContent = `Подстрока найдена на позиции: ${position}`;
    } else {
      result.textContent = "Подстрока не найдена.";
    }
  });

  resetButton.addEventListener("click", () => {
    mainStringInput.value = "";
    subStringInput.value = "";
    result.textContent = "";
    stringLengthDisplay.textContent = "Длина строки: 0";
  });
});
