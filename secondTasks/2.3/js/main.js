"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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

  function calculateSum(matrix) {
    let sum = 0;

    for (let i = 0; i < 5; i++) {
      const value = matrix[i][1];
      if (value > 0) {
        sum += value;
      }
    }

    return sum;
  }

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
