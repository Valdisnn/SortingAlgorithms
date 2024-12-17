"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("number-form");
  const resultElement = document.getElementById("result");
  const resetButton = document.getElementById("reset-button");

  const hasDuplicates = (numbers) => {
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 4; j++) {
        if (numbers[i] === numbers[j]) {
          return true;
        }
      }
    }
    return false;
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

    if (hasDuplicates(numbers)) {
      resultElement.textContent = "Есть повторяющиеся.";
      resultElement.style.color = "red";
    } else {
      resultElement.textContent = "Все числа уникальны.";
      resultElement.style.color = "green";
    }

    setTimeout(() => {
      resultElement.textContent = "";
    }, 3000);
  });

  resetButton.addEventListener("click", clearInputs);

  resultElement.style.minHeight = "1.5em";
  console.log(e, "Всё прогрузилось на ура ! =)");
});
