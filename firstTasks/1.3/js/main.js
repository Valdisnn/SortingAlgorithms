"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generateBtn");
  const resultDiv = document.getElementById("result");

  generateBtn.addEventListener("click", function () {
    let numbers = [];
    let i = 0;

    while (i < 4) {
      let randomNum = Math.random() * 100;
      let roundedNum = randomNum - (randomNum % 1);
      numbers[i] = roundedNum;
      i++;
    }

    let max = numbers[0];
    let min = numbers[0];
    let maxCount = 0;
    let minCount = 0;

    i = 0;
    while (i < 4) {
      if (numbers[i] > max) {
        max = numbers[i];
        maxCount = 1;
      } else if (numbers[i] === max) {
        maxCount++;
      }

      if (numbers[i] < min) {
        min = numbers[i];
        minCount = 1;
      } else if (numbers[i] === min) {
        minCount++;
      }

      i++;
    }

    let resultText = "Числа: ";
    i = 0;
    while (i < 4) {
      resultText += numbers[i] + " ";
      i++;
    }

    resultText += `<br><br>MAX число: ${max}, количество: ${maxCount}`;
    resultText += `<br>MIN число: ${min}, количество: ${minCount}`;

    resultDiv.innerHTML = resultText;
  });
});
