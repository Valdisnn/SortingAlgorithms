"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const generateArrayButton = document.getElementById("generateArray");
  const sortArrayButton = document.getElementById("sortArray");
  const arraySizeInput = document.getElementById("arraySize");
  const resultDiv = document.getElementById("result");
  let originalArray = [];

  // Генерация массива случайных чисел
  generateArrayButton.addEventListener("click", () => {
    const size = parseInt(arraySizeInput.value, 10);
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

    const methods = {
      bubbleSort: "Сортировка методом пузырьком",
      insertionSort: "Сортировка методом прямого включения",
      selectionSort: "Сортировка методом прямого выбора",
      shakerSort: "Шейкерная сортировка",
      shellSort: "Сортировка методом Шелла",
      quickSort: "Сортировка методом Хоара",
    };

    resultDiv.innerHTML += `<h2>Результаты сортировки:</h2>`;

    for (const method in methods) {
      const sortedArray = eval(method)([...originalArray]); // Копия массива
      resultDiv.innerHTML += `<p><strong>${
        methods[method]
      }:</strong> ${sortedArray.join(", ")}</p>`;
    }
  });

  // Реализация методов сортировки
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }

  function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }

  function shakerSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      for (let i = left; i < right; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
      right--;
      for (let i = right; i > left; i--) {
        if (arr[i - 1] > arr[i]) {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        }
      }
      left++;
    }
    return arr;
  }

  function shellSort(arr) {
    let gap = Math.floor(arr.length / 2);
    while (gap > 0) {
      for (let i = gap; i < arr.length; i++) {
        let temp = arr[i];
        let j = i;
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
        arr[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }
    return arr;
  }

  function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else if (arr[i] > pivot) right.push(arr[i]);
      else equal.push(arr[i]);
    }
    return [...quickSort(left), ...equal, ...quickSort(right)];
  }
});
