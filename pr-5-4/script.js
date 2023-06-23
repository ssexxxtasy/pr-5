function calculate() {
  // Отримання значень меж зміни значень аргументу x та кроку зміни значень аргументу
  var start_x = parseFloat(document.getElementById("start_x").value);
  var end_x = parseFloat(document.getElementById("end_x").value);
  var step = parseFloat(document.getElementById("step").value);

  var resultContainer = document.getElementById("result");

  // Очищення контейнера результату
  resultContainer.innerHTML = "";

  // Обчислення та виведення результатів для кожного значення x
  for (var x = start_x; x <= end_x; x += step) {
    var result = 0;

    // Виконання розгалуженого обчислювального процесу згідно з новими формулами
    if (x < 4) {
      result = Math.tan(x) - Math.pow(x, 2);
    } else if (x === 4) {
      result = 35 * Math.PI;
    } else {
      result = Math.log(x) + 3;
    }

    // Додавання результату до контейнера
    var resultElement = document.createElement("p");
    resultElement.textContent = "f(" + x + ") = " + result.toFixed(2);
    resultContainer.appendChild(resultElement);
  }
}
