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

  // Создание визуала для каждого значения в массиве
  const createArrayElements = (array) => {
    arrayContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов
    array.forEach((value) => {
      const element = document.createElement("div");
      element.classList.add("array-element");
      element.style.height = `${value}px`; // Высота элемента = значение массива
      element.textContent = value; // Добавляем значение внутри элемента
      arrayContainer.appendChild(element);
    });
  };

  // Асинхронная сортировка пузырьком с задержками для анимации
  const bubbleSort = async (array) => {
    let swapped;
    let n = array.length;
    do {
      swapped = false;
      // Перебор массива
      for (let i = 0; i < n - 1; i++) {
        const elements = arrayContainer.children;
        const firstElement = elements[i];
        const secondElement = elements[i + 1];

        // Если элементы идут в неправильном порядке, меняем их
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Меняем местами элементы массива

          // Визуализация: выделяем элементы, которые меняются
          firstElement.style.backgroundColor = "#ff6f61";
          secondElement.style.backgroundColor = "#ff6f61";
          await new Promise((resolve) => setTimeout(resolve, 100)); // Задержка для визуализации

          // Обновляем высоту и текст внутри элементов для отображения изменений
          firstElement.style.height = `${array[i]}px`;
          secondElement.style.height = `${array[i + 1]}px`;
          firstElement.textContent = array[i]; // Обновляем текст в первом элементе
          secondElement.textContent = array[i + 1]; // Обновляем текст во втором элементе

          swapped = true; // Обозначаем, что произошел обмен

          // Сбрасываем цвет элементов после их обмена
          firstElement.style.backgroundColor = "#4285f4";
          secondElement.style.backgroundColor = "#4285f4";
        }
      }
      n--; // Уменьшаем размер области для поиска, так как последний элемент уже отсортирован
    } while (swapped); // Если был обмен, повторяем процесс

    result.textContent = "Сортировка завершена!";
  };

  // Обновление состояния кнопки старта в зависимости от введенной длины массива
  const updateButtonState = () => {
    const arrayLength = parseInt(lengthInput.value, 10);
    // Кнопка будет активна только если введена корректная длина массива
    startBtn.disabled = isNaN(arrayLength) || arrayLength <= 0;
  };

  // Слушатель для инпута, обновляющий состояние кнопки при изменении длины массива
  lengthInput.addEventListener("input", updateButtonState);

  startBtn.addEventListener("click", async () => {
    const arrayLength = parseInt(lengthInput.value, 10);

    // Проверка на валидность введенной длины
    if (isNaN(arrayLength) || arrayLength <= 0) {
      alert("Пожалуйста, введите корректную длину массива!"); // Оповещаем пользователя о неверной длине
      return;
    }

    startBtn.disabled = true; // Отключаем кнопку, чтобы предотвратить повторный запуск
    result.textContent = "Генерация массива...";

    // Генерация массива
    const array = generateRandomArray(arrayLength);

    // Вывод исходного массива в консоль
    console.log("Исходный массив:", array);

    // Отображение массива в верстке
    createArrayElements(array);

    result.textContent = "Сортировка в процессе...";

    // Начинаем процесс сортировки
    await bubbleSort(array);

    // Вывод перебранного массива в консоль
    console.log("Отсортированный массив:", array);

    // Включаем кнопку после завершения сортировки
    startBtn.disabled = false;
  });

  updateButtonState();
});
