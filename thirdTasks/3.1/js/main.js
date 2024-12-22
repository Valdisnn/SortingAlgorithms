"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const generateArrayButton = document.getElementById("generateArray");
  const sortArrayButton = document.getElementById("sortArray");
  const arraySizeInput = document.getElementById("arraySize");
  const resultDiv = document.getElementById("result");
  let originalArray = [];

  // Генерация рандомного массива
  generateArrayButton.addEventListener("click", () => {
    const size = parseInt(arraySizeInput.value, 10);
    if (isNaN(size) || size <= 0) {
      alert("Пожалуйста, введите правильный размер массива.");
      return;
    }

    originalArray = [];
    for (let i = 0; i < size; i++) {
      originalArray.push(Math.floor(Math.random() * 101));
    }
    resultDiv.innerHTML = `<p id="originalArray">Исходный массив: ${originalArray.join(
      ", "
    )}</p>`;
    sortArrayButton.disabled = false; // Активируем кнопку сортировки
  });

  // Сортировка массива разными методами
  sortArrayButton.addEventListener("click", () => {
    if (originalArray.length === 0) {
      alert("Пожалуйста, сначала создайте массив!");
      return;
    }

    sortArrayButton.disabled = true; // Деактивируем кнопку сортировки

    const sortingMethods = {
      bubbleSort,
      insertionSort,
      selectionSort,
      shakerSort,
      shellSort,
      quickSort,
    };

    resultDiv.innerHTML += `<h2>Результаты сортировки:</h2>`;

    Object.keys(sortingMethods).forEach((method) => {
      const sortedArray = sortingMethods[method]([...originalArray]); // Копия массива
      resultDiv.innerHTML += `<p><strong>${method}:</strong> ${sortedArray.join(
        ", "
      )}</p>`;
    });
  });

  // Сортировка методом пузырьком
  function bubbleSort(arr) {
    // Перебор циклом по всему массива, сравниваем соседние элементы и меняем их местами, если они идут в неправильном порядке.
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Переприсваивание элементов
        }
      }
    }
    return arr; // Возвращаем отсортированный массив
  }

  // Сортировка методом вставки
  function insertionSort(arr) {
    // Начинаем с 2-го элемента и встраиваем его в отсортированную часть массива.
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      // Сдвигаем элементы, которые больше ключа, на одну позицию вправо.
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key; // Вставляем ключ в нужную позицию
    }
    return arr; // Возвращаем отсортированный массив
  }

  // Сортировка методом выбора
  function selectionSort(arr) {
    // Находим минимальный элемент в оставшейся части массива и меняем его местами с первым элементом.
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j; // Находим индекс минимального элемента
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Переприсваивание элементов
    }
    return arr; // Возвращаем отсортированный массив
  }

  // Шейкерная сортировка (или двусторонняя пузырьковая сортировка, если верить интернету)
  function shakerSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    // Двигаемся от левого к правому и от правого к левому, выполняя пузырьковую сортировку в обе стороны.
    while (left < right) {
      for (let i = left; i < right; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Переприсваивание элементов
        }
      }
      right--; // Уменьшаем правую границу
      for (let i = right; i > left; i--) {
        if (arr[i - 1] > arr[i]) {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; // Переприсваивание элементов
        }
      }
      left++; // Увеличиваем левую границу
    }
    return arr; // Возвращаем отсортированный массив
  }

  // Сортировка методом Шелла
  function shellSort(arr) {
    let gap = Math.floor(arr.length / 2);
    // Изначально разница между индексами элементов больше 1, и по мере сортировки gap уменьшается.
    while (gap > 0) {
      for (let i = gap; i < arr.length; i++) {
        let temp = arr[i];
        let j = i;
        // Сдвигаем элементы, которые больше ключа, на gap позиций вправо.
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
        arr[j] = temp; // Вставляем элемент в правильную позицию
      }
      gap = Math.floor(gap / 2); // Уменьшаем разницу между индексами
    }
    return arr; // Возвращаем отсортированный массив
  }

  // Быстрая сортировка (метод Хоара)
  function quickSort(arr) {
    if (arr.length <= 1) return arr; // Базовый случай: если массив состоит из одного элемента, он уже отсортирован.
    const pivot = arr[Math.floor(arr.length / 2)]; // Выбираем опорный элемент
    const left = [];
    const right = [];
    const equal = [];
    // Разделяем массив на 3 части: меньше опорного, равные опорному и больше опорного
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else if (arr[i] > pivot) right.push(arr[i]);
      else equal.push(arr[i]);
    }
    // Рекурсивно сортируем части массива и объединяем их
    return [...quickSort(left), ...equal, ...quickSort(right)];
  }
});
