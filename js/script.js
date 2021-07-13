"use strict";
let MathOperation = prompt('Выберите операцию: + , - , / , * .', '');
if (MathOperation == '+') {
    let x = prompt( 'Введите первое слогаемое', '');
    let y = prompt( 'Введите второе слогаемое', '');
    let result = +x + +y;
    alert( 'Результат: ' + result);
  } else if (MathOperation == '-') {
            let x = prompt( 'Введите уменьшаемое', '');
            let y = prompt( 'Введите вычитаемое', '');
            let result = +x - +y;
            alert( 'Результат: ' + result);
  }         else if (MathOperation == '*') {
                    let x = prompt( 'Введите первый множитель', '');
                    let y = prompt( 'Введите второй множитель', '');
                    let result = +x * +y;
                    alert( 'Результат: ' + result);
  }                 else if (MathOperation == '/') {
                              let x = prompt( 'Введите делимое', '');
                              let y = prompt( 'Введите делитель', '');
                              let result = +x / +y;
                              alert( 'Результат: ' + result);
  }                           else {alert( 'Неверное действие')
  }
  