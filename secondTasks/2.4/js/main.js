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

      for (let j = 0; j < 5; j++) {
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

  function findSmallestPositive(matrix) {
    let smallestPositive = null;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const value = matrix[i][j];
        if (
          value > 0 &&
          (smallestPositive === null || value < smallestPositive)
        ) {
          smallestPositive = value;
        }
      }
    }

    return smallestPositive;
  }

  function updateResult() {
    const matrix = generateMatrix();
    const smallestPositive = findSmallestPositive(matrix);
    document.getElementById("result").textContent =
      smallestPositive === null
        ? "Нет положительных элементов"
        : smallestPositive;
  }

  document
    .getElementById("restartButton")
    .addEventListener("click", updateResult);

  updateResult();
});
