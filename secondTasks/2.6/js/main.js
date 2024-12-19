"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("arrayForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const rows = parseInt(document.getElementById("rows").value, 10);
    const cols = parseInt(document.getElementById("cols").value, 10);
    const ones = parseInt(document.getElementById("ones").value, 10);

    if (ones > rows * cols) {
      alert(
        "Количество единиц не может быть больше общего числа элементов массива!"
      );
      return;
    }

    // Создание массива
    const array = createArray(rows, cols, ones);

    // Вывод результата
    const mirroredArray = mirrorArray(array);
    displayArrays(array, mirroredArray);
  });

  function createArray(rows, cols, ones) {
    const array = [];
    let onesPlaced = 0;

    // Создаем массив и заполняем нулями
    for (let i = 0; i < rows; i++) {
      array[i] = [];
      for (let j = 0; j < cols; j++) {
        array[i][j] = 0;
      }
    }

    // Расставляем единицы случайным образом
    while (onesPlaced < ones) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);

      if (array[randomRow][randomCol] === 0) {
        array[randomRow][randomCol] = 1;
        onesPlaced++;
      }
    }

    return array;
  }

  function mirrorArray(array) {
    const rows = array.length;
    const cols = array[0].length;

    const mirrored = [];
    for (let i = 0; i < rows; i++) {
      mirrored[i] = [];
      for (let j = 0; j < cols; j++) {
        mirrored[i][j] = array[i][cols - j - 1];
      }
    }

    return mirrored;
  }

  function displayArrays(original, mirrored) {
    const rows = original.length;
    let output = "";

    for (let i = 0; i < rows; i++) {
      output +=
        original[i].map((el) => (el === 1 ? "*" : " ")).join(" ") +
        " | " +
        mirrored[i].map((el) => (el === 1 ? "*" : " ")).join(" ") +
        "\n";
    }

    resultDiv.textContent = output;
  }
});
