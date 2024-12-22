"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const sizeInput = document.getElementById("sizeInput");
  const elementInput = document.getElementById("elementInput");
  const result = document.getElementById("result");
  const generatedArrayDiv = document.getElementById("generatedArray");
  const resetButton = document.getElementById("resetButton");

  // Функция рандома
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Генерации массива из рандомных чисел
  function generateRandomArray(size) {
    const array = [];
    let count = 0; // Счетчик вместо array.length
    while (count < size) {
      array[count] = getRandomNumber(-100, 100);
      count++;
    }
    return array;
  }

  // Поиск в массиве
  function searchElement(array, target) {
    let count = 0;
    for (let i in array) {
      if (array[i] === target) {
        return count;
      }
      count++;
    }
    return -1;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const size = parseInt(sizeInput.value, 10);
    const target = parseInt(elementInput.value, 10);

    const array = generateRandomArray(size);

    // Отображение массива
    let arrayString = "[ ";
    let count = 0;
    for (let i in array) {
      arrayString += array[i];
      count++;
      if (count < size) {
        arrayString += ", ";
      }
    }
    arrayString += " ]";
    generatedArrayDiv.textContent = `Массив ${arrayString}`;

    // Поиск элемента
    const index = searchElement(array, target);

    // Вывод
    if (index !== -1) {
      result.textContent = `Элемент найден на позиции: ${index}`;
    } else {
      result.textContent = "Элемент не найден";
    }
  });

  resetButton.addEventListener("click", () => {
    sizeInput.value = "";
    elementInput.value = "";
    result.textContent = "";
    generatedArrayDiv.textContent = "";
  });
});
