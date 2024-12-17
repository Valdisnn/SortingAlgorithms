"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let array = [];

  function generateRandomArray(size, min = 1, max = 100) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
  }

  function customTrim(s) {
    let start = 0;
    let end = s.length - 1;

    while (start <= end && s[start] === " ") {
      start++;
    }

    while (end >= start && s[end] === " ") {
      end--;
    }

    let trimmed = "";
    for (let i = start; i <= end; i++) {
      trimmed += s[i];
    }

    return trimmed;
  }

  function customJoin(arr, separator = " ") {
    let result = "";
    for (let i = 0; i < getArrayLength(arr); i++) {
      result += arr[i];
      if (i < getArrayLength(arr) - 1) {
        result += separator;
      }
    }
    return result;
  }

  function displayArray(array, elementId) {
    const element = document.getElementById(elementId);
    let arrayContent = "";
    for (let i = 0; i < getArrayLength(array); i++) {
      arrayContent += array[i] + " ";
    }
    element.textContent = `Массив: ${customTrim(arrayContent)}`;
  }

  function getArrayLength(arr) {
    let i = 0;
    try {
      while (true) {
        if (arr[i] === undefined) {
          throw "outOfBounds";
        }
        i++;
      }
    } catch (e) {
      return i;
    }
  }

  function reverseArray(arr) {
    const length = getArrayLength(arr);
    let step = 1;
    const stepsContainer = document.getElementById("steps");
    if (!stepsContainer) return;
    stepsContainer.innerHTML = "";
    for (let i = 0; i < Math.floor(length / 2); i++) {
      const temp = arr[i];
      arr[i] = arr[length - 1 - i];
      arr[length - 1 - i] = temp;
      const stepElement = document.createElement("p");
      stepElement.textContent = `Шаг ${step}: Массив после обмена элементов: ${customJoin(
        arr
      )}`;
      stepsContainer.appendChild(stepElement);
      step++;
    }
  }

  const arrayForm = document.getElementById("arrayForm");
  arrayForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const sizeInput = document.getElementById("arraySize");
    const size = parseInt(sizeInput.value);
    if (size > 0) {
      array = generateRandomArray(size);
      displayArray(array, "originalArray");
      document.getElementById("reverseButton").disabled = false;
      document.getElementById("createArrayButton").disabled = true;
      document.getElementById("resetButton").disabled = false;
    }
  });

  const reverseButton = document.getElementById("reverseButton");
  reverseButton.addEventListener("click", () => {
    reverseArray(array);
    reverseButton.disabled = true;
    displayArray(array, "reversedArray");
  });

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", () => {
    document.getElementById("originalArray").textContent = "";
    document.getElementById("reversedArray").textContent = "";
    document.getElementById("steps").innerHTML = "";
    array = [];
    reverseButton.disabled = true;
    document.getElementById("createArrayButton").disabled = false;
    document.getElementById("resetButton").disabled = true;
    document.getElementById("arraySize").value = "";
  });
});