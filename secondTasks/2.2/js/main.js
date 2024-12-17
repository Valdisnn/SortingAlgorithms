"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function generateArray() {
    const A = new Array(20);
    for (let i = 0; i < 20; i++) {
      A[i] = Math.floor(Math.random() * 21) - 10;
    }
    return A;
  }

  function findFirstNegative(arr) {
    let value = null;
    let index = -1;
    let i = 0;

    while (i < 20) {
      if (arr[i] < 0) {
        value = arr[i];
        index = i;
        break;
      }
      i++;
    }

    return { value: value, index: index };
  }

  function updateResults() {
    const A = generateArray();
    const result = findFirstNegative(A);

    let arrayOutput = "";
    for (let i = 0; i < 20; i++) {
      arrayOutput += A[i];
      if (i < 19) {
        arrayOutput += ", ";
      }
    }
    document.getElementById("arrayOutput").textContent = arrayOutput;
    document.getElementById("negativeValue").textContent = result.value;
    document.getElementById("negativeIndex").textContent = result.index;
  }

  updateResults();

  document.getElementById("resetButton").addEventListener("click", function () {
    updateResults();
  });
});
