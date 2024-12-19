"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const generateArrayButton = document.getElementById("generateArrayButton");
  const resultContainer = document.getElementById("result");

  generateArrayButton.addEventListener("click", () => {
    const missingNumber = Math.floor(Math.random() * 65536); // Диапазон от 0 до 65535
    const numbers = new Array(65535); // Массив длиной 65535 (вместо 65534)

    // Заполнение от 0 до 65535, пропустив одно
    let index = 0;
    for (let i = 0; i < 65536; i++) {
      // 65536 вместо 65535
      if (i === missingNumber) continue;
      numbers[index++] = i;
    }

    let sumExpected = 0;
    let sumActual = 0;

    // Сумма всех чисел от 0 до 65535 (включительно)
    for (let i = 0; i < 65536; i++) {
      sumExpected += i;
    }

    // Сумма чисел в массиве
    for (let i = 0; i < 65535; i++) {
      sumActual += numbers[i];
    }

    const missingNum = sumExpected - sumActual;

    // Выводим недостающее число
    resultContainer.textContent = `Отсутствующее число: ${missingNum}`;

    // Выводим весь массив в консоль
    console.log(numbers);
  });
});
