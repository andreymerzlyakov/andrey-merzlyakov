/**
 * Задание 1.
 Создай переменные всех основных типов данных: строка, число, булево, null, undefined, symbol, BigInt,
 объект и массив.
 Напиши typeof для каждой.
 пример: console.log(typeof test)
 **/


// Код задания 1

let Name = "Alice";
let age = 18;
let checked = true;
let n = null;
let u = undefined;
let id = Symbol("id");
let p = 31415926535n;
let obj = {};
let m = [];

console.log(typeof Name, typeof age, typeof checked, typeof n, typeof u, typeof id, typeof p, typeof obj, typeof m)

/**
 * Задание 2.
 Преобразуй строку "123" в число. Попробуй сложить "123" + 5 и Number("123") + 5.
 Объясни разницу.
 **/


// Код задания 2

let str = "123"
console.log(str + 5) // в этом примере первая переменная является строкой, из-за чего они и складываются как строки, т.е. объединяются в одну
console.log(Number(123) + 5) // здесь первая переменная меняет тип данных из строки в число, из-за чего они складываются как числа

/**
 * Задание 3.
 Напиши функцию, которая принимает аргумент и возвращает строку: "Это строка", "Это число",
 и т.п. — в зависимости от типа.
 **/


// Код задания 3

function type(abc) {
    abc = typeof(abc)
    if (abc == "string") {
        return "Это строка"
    }
    else if (abc == "number") {
        return "Это число"
    }
    else if (abc == "boolean") {
        return "Это логическое значение"
    }
    else if (abc == "bigint") {
        return "Это bigint"
    }
    else if (abc == "symbol") {
        return "Это символ"
    }
    else{
        return "Это объект"
    }
}

console.log(type({}))

/**
 Задание 4.
Чем отличаются undefined и null? Проверьте результат выполнения следующего кода.

    let a;
    let b = null;

    console.log(a == b);  // ?
    console.log(a === b); // ?
    console.log(typeof a); // ?
    console.log(typeof b); // ?
 **/

// Код задания 4

// undefined обозначает отсутствие значения, а null намеренное указание на это отсутствие

let a;
let b = null;

    console.log(a == b);  // true
    console.log(a === b); // false
    console.log(typeof a); // undefined
    console.log(typeof b); // null