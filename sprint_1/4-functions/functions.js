/**
 * Задание 1.
 Напиши функцию greet(name), которая возвращает строку "Привет, [name]!"
 **/

// Код задания 1

function greet(name) {
   console.log("Привет, " + name + "!")
}

greet("Alice")

/** Задание 2.
 * Перепиши функцию `multiply` в виде стрелочной функции.
 * function multiply(a, b) {
 *     return a * b;
 * }
 *  **/

// Код задания 2

const multiply = (a, b) => {
   return a * b;
}

console.log(multiply(3, 5))

/**
 * Задание 3.
 Создай стрелочную функцию sum, которая принимает два числа и возвращает их сумму.
 **/

// Код задания 3

const sum = (a, b) => {
   return a + b;
};

console.log(sum(2, 3))

/**
 * Задание 4.
 Напиши функцию isEven(num) — возвращает true, если число чётное, иначе false.
 **/

// Код задания 4

function isEven(num) {
   if (num % 2 == 0) {
      return true;
   }
   else {
      return false;
   }
}

console.log(isEven(2))

/**
 * Задание 5.
 Напиши функцию formatName(firstName, lastName) возвращает строку вида:
 "Иванов И."
 Важно сокращать имя до 1 символа !
 **/

// Код задания 5

function formatName(firstName, lastName) {
   if (lastName != "" && lastName != undefined) {
      return firstName + " " + lastName.substring(0, 1) + "."
   }
   return "Введите фамилию"
}

console.log(formatName("Иванов"))

/**
 * Задание 6.
 Напиши функцию translateStatus(code), которая возвращает:
 'success' → 'Успешно'
 'error' → 'Ошибка'
 'pending' → 'В ожидании'
 Если нет соответствия — 'Неизвестно'.
 **/

// Код задания 6

function translateStatus(code) {
   switch (code) {
      case "success":
         return "Успешно"
      case "error":
         return "Ошибка"
      case "pending":
         return "В ожидании"
      default:
         return "Неизвестно"
      }
   }

console.log(translateStatus("qwe"))

/**
 * Задание 7.
 Функция canLogin(user) возвращает true, если user.isActive === true и user.role === 'admin'.
 **/
// Код задания 7

const user = {
   isActive: true, role: "admin"
}

function canLogin(user) {
   if (user.isActive === true && user.role === 'admin') {
      return true
   }
   return false
}

console.log(canLogin(user))

/**
 * Задание 8.
 Создай функцию, которая принимает любое количество аргументов и выводит их в консоль.
 Используй стрелочную функцию, но помни, что она не имеет объекта `arguments`.
 const showArgs = () => {
    console.log(arguments); // Ошибка: `arguments` не существует в стрелочной функции
 };
    showArgs(1, 2, 3);
 **/

// Код задания 8

const showArgs = (...arguments) => {
   console.log(arguments);
};

showArgs(1, 2, 3, 4, 4, 4, 2);