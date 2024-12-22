"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Матрица 6х6
  function generateMatrix() {
    const matrix = new Array(6);
    const tbody = document.querySelector("#matrix tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < 6; i++) {
      matrix[i] = new Array(6);
      const tr = document.createElement("tr");

      for (let j = 0; j < 6; j++) {
        const td = document.createElement("td");
        const randomValue = getRandomInt(-10, 10);
        td.textContent = randomValue;
        matrix[i][j] = randomValue;
        if (i === j) {
          td.classList.add("diagonal"); // Класс для главной диагонали
        }
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    }

    return matrix;
  }

  // Сумма элементов выше и ниже главной диагонали
  function calculateSum(matrix) {
    let sum = 0;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (i < j || i > j) {
          sum += matrix[i][j]; // Добавляем элементы не находящиеся на главной диагонали
        }
      }
    }

    return sum;
  }

  // Новая матрица, вызов старых функий
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
