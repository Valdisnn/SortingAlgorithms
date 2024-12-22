"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Рандомная матрица 5x3
  function generateMatrix() {
    const matrix = [];
    const tbody = document.querySelector("#matrix tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < 5; i++) {
      const row = [];
      const tr = document.createElement("tr");

      for (let j = 0; j < 3; j++) {
        const td = document.createElement("td");
        const randomValue = getRandomInt(-10, 10);
        td.textContent = randomValue;
        row.push(randomValue);
        tr.appendChild(td);
      }

      matrix.push(row);
      tbody.appendChild(tr);
    }

    return matrix;
  }

  // Сумма + элементов во 2 столбце
  function calculateSum(matrix) {
    let sum = 0;

    for (let i = 0; i < 5; i++) {
      const value = matrix[i][1]; // Второй столбец
      if (value > 0) {
        sum += value;
      }
    }

    return sum;
  }

  // Новую матрица, сумма и вывод
  function updateResult() {
    const matrix = generateMatrix();
    const sum = calculateSum(matrix);
    document.getElementById("result").textContent = sum;
  }

  document
    .getElementById("restartButton")
    .addEventListener("click", updateResult);

  updateResult();
});
