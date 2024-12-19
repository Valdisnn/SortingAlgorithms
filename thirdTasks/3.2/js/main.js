document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const startBtn = document.getElementById("startBtn");
  const arrayContainer = document.getElementById("arrayContainer");
  const result = document.getElementById("result");
  const lengthInput = document.getElementById("lengthInput"); // Инпут для длины массива

  const generateRandomArray = (size = 10) => {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 100) + 20);
    }
    return array;
  };

  const createArrayElements = (array) => {
    arrayContainer.innerHTML = "";
    array.forEach((value) => {
      const element = document.createElement("div");
      element.classList.add("array-element");
      element.style.height = `${value}px`;
      element.textContent = value; // Добавляем цифры внутри элементов
      arrayContainer.appendChild(element);
    });
  };

  const bubbleSort = async (array) => {
    let swapped;
    let n = array.length;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        const elements = arrayContainer.children;
        const firstElement = elements[i];
        const secondElement = elements[i + 1];

        if (array[i] > array[i + 1]) {
          // смена эелементов соотсвественно
          [array[i], array[i + 1]] = [array[i + 1], array[i]];

          // визуализация
          firstElement.style.backgroundColor = "#ff6f61";
          secondElement.style.backgroundColor = "#ff6f61";
          await new Promise((resolve) => setTimeout(resolve, 100));

          firstElement.style.height = `${array[i]}px`;
          secondElement.style.height = `${array[i + 1]}px`;
          firstElement.textContent = array[i]; // Обновляем цифры
          secondElement.textContent = array[i + 1]; // Обновляем цифры

          swapped = true;

          // сброс цвета
          firstElement.style.backgroundColor = "#4285f4";
          secondElement.style.backgroundColor = "#4285f4";
        }
      }
      n--;
    } while (swapped);

    result.textContent = "Сортировка завершена!";
  };

  const updateButtonState = () => {
    const arrayLength = parseInt(lengthInput.value, 10);
    startBtn.disabled = isNaN(arrayLength) || arrayLength <= 0;
  };

  lengthInput.addEventListener("input", updateButtonState);

  startBtn.addEventListener("click", async () => {
    // Получаем длину массива из инпута
    const arrayLength = parseInt(lengthInput.value, 10);

    // Проверка на валидность введенной длины
    if (isNaN(arrayLength) || arrayLength <= 0) {
      alert("Пожалуйста, введите корректную длину массива!");
      return;
    }

    startBtn.disabled = true; // Отключаем кнопку
    result.textContent = "Генерация массива...";

    // Генерация массива
    const array = generateRandomArray(arrayLength);

    // Выводим исходный массив в консоль
    console.log("Исходный массив:", array);

    createArrayElements(array);

    // Сообщаем, что начинается сортировка
    result.textContent = "Сортировка в процессе...";

    // Начинаем сортировку
    await bubbleSort(array);

    // Выводим отсортированный массив в консоль
    console.log("Отсортированный массив:", array);

    // Включаем кнопку после завершения сортировки
    startBtn.disabled = false;
  });

  // Инициализация состояния кнопки при загрузке страницы
  updateButtonState();
});
