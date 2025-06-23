/**
 * Задание 1.
 Создай переменные:
 appName (название приложения) — не должно изменяться
 currentUser — может меняться (логин, логаут)
 isDarkTheme — переключение темы
 **/



// Код задания 1

const appName = "Name";
let currentUser = "login";
currentUser = "logout";
let isDarkTheme = true;
isDarkTheme = false;

/**
 * Задание 2.
 Объяви переменные для хранения имени пользователя, возраста и его статуса (онлайн/оффлайн).
 Используй let и const там, где это уместно.
 Попробуй изменить значение const-переменной. Объясни, почему это вызывает ошибку.
 Создай переменную с текстом "Привет, [имя]!" и вставь имя из другой переменной (используй шаблонные строки).
 **/


// Код задания 2

const userName = "Ivan";
let age = "18";
let status = "login";
// userName = "Roma";
// изменение переменной вызавает ошибку, потому что const создает константу, доступную только для чтения
let hello = `Привет, ${userName} !`;

console.log(hello)

/**
 * Задание 3.
 Создай переменную const userCount = 10, а потом попробуй увеличить её.
 Напиши, как это исправить и почему нельзя менять const.
 **/


// Код задания 3

const userCount = 10;
// userCount += 20; Ошибка
// const создает ссылку на значение доступную только для чтения
let mostUserCount = userCount + 10; console.log(mostUserCount); // способ исправления
console.log(userCount);

/** Задание 4.
 *  Что выведет следующий код?
 *  function scopeTest() {
 *     if (true) {
 *         var a = 10;
 *         let b = 20;
 *         const c = 30;
 *     }
 *     console.log(a); // ?
 *     console.log(b); // ?
 *     console.log(c); // ?
 * }
 *  **/

// Ответ на задание 4

10
// b is not defiend
// c is not defiend