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

  // Создание массива с 1ми
  function createArray(rows, cols, ones) {
    const array = [];
    let onesPlaced = 0;

    // Создание массива с 0ми
    for (let i = 0; i < rows; i++) {
      array[i] = [];
      for (let j = 0; j < cols; j++) {
        array[i][j] = 0;
      }
    }

    // Рандомная расстановка 1ц
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

  // Зеркальное отражение массива
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

  // Вывод в DOM исходного и зеркального массива
  function displayArrays(original, mirrored) {
    const rows = original.length;
    let output = "<pre>";

    for (let i = 0; i < rows; i++) {
      output +=
        original[i].map((el) => (el === 1 ? "*" : " ")).join(" ") +
        " | " +
        mirrored[i].map((el) => (el === 1 ? "*" : " ")).join(" ") +
        "\n";
    }

    output += "</pre>";
    resultDiv.innerHTML = output;
  }
});
