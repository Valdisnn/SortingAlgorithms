"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("number-form");
  const resultElement = document.getElementById("result");
  const resetButton = document.getElementById("reset-button");

  const findThirdLargest = (numbers) => {
    let first = -Infinity,
      second = -Infinity,
      third = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > first) {
        third = second;
        second = first;
        first = numbers[i];
      } else if (numbers[i] > second && numbers[i] < first) {
        third = second;
        second = numbers[i];
      } else if (numbers[i] > third && numbers[i] < second) {
        third = numbers[i];
      }
    }

    if (third === -Infinity) {
      return null;
    }

    return third;
  };

  const clearInputs = () => {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    resultElement.textContent = "";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numbers = [
      parseInt(document.getElementById("num1").value, 10),
      parseInt(document.getElementById("num2").value, 10),
      parseInt(document.getElementById("num3").value, 10),
      parseInt(document.getElementById("num4").value, 10),
    ];

    const thirdLargest = findThirdLargest(numbers);

    if (thirdLargest !== null) {
      resultElement.textContent = `Третье по величине число: ${thirdLargest}`;
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Третье по величине число не существует.";
      resultElement.style.color = "red";
    }

    setTimeout(() => {
      resultElement.textContent = "";
    }, 3000);
  });

  resetButton.addEventListener("click", clearInputs);
});
