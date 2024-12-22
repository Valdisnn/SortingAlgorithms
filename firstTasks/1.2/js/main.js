"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("number-form");
  const resultElement = document.getElementById("result");
  const resetButton = document.getElementById("reset-button");

  // Находит третье по величине число в массиве
  const findThirdLargest = (numbers) => {
    let first = 0,
      second = 0,
      third = 0;

    // Перебор всех чисел, далее переприсваивание
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > first) {
        third = second; // 3 на 2 место
        second = first; // 1 на 2 место
        first = numbers[i]; // Новое максимальное число
      } else if (numbers[i] > second && numbers[i] < first) {
        third = second; // 2 на 3 место
        second = numbers[i]; // Новое 2 по величине число
      } else if (numbers[i] > third && numbers[i] < second) {
        third = numbers[i]; // Новое 3 по величине число
      }
    }

    if (third === 0) {
      return null; // Если 3 не существует
    }

    return third;
  };

  // Очистка инпутов
  const clearInputs = () => {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    resultElement.textContent = "";
  };

  // Обработчик формы
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
