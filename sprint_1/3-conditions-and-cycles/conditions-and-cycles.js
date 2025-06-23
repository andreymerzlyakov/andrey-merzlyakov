/**
 * Задание 1.
 Напиши функцию, который проверяет возраст пользователя и выводит сообщение:
 "Доступ разрешён", если возраст больше или равен 18,
 "Доступ запрещён" — если меньше.
 **/


// Код задания 1

function checkAge(age) {
    if (age >= 18) {
        return "Доступ разрешён"
    }
    return "Доступ запрещён"
}

console.log(checkAge(10))
console.log(checkAge(18))
console.log(checkAge(26))

/**
 * Задание 2.
 Цикл: Выведи в консоль числа от 1 до 10.
 **/


// Код задания 2

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

/**
 * Задание 3.
 Есть рейтинг от 1 до 5. Напиши функцию, которая принимает рейтинг и выводит строку из звёздочек:
 ★★★☆☆ для 3.
 **/


// Код задания 3

function rate(rating) {
    let s = '★'
    let n = '☆'
    let qwe = ""
    while (qwe.length != rating) {
        qwe += s
    }
    while (qwe.length != 5) {
        qwe += n
    }
    console.log(qwe)
}

rate(1)
rate(2)
rate(3)
rate(4)
rate(5)

/**
 * Задание 4.
 Напиши функцию, которая будет:
 Если сейчас между 22:00 и 07:00 — возвращать:
 "Ночная блокировка: операции недоступны".
 Иначе - возвращать: true
 Используй Date и if.
 **/

// Код задания 4


function block(currDate) {
    if (currDate.getHours() > 22, currDate.getHours() < 7) {
        return "Ночная блокировка: операции недоступны"
    }
    return true
}

console.log(block(new Date()))

/**
 * Задание 5.
 Есть массив товаров с ценами. Выведи список: в формате:
 1. Хлеб — 40₽
 2. Молоко — 60₽
 ..и т.д
 **/

const productList = [
    { name: 'Хлеб', price: 40 },
    { name: 'Молоко', price: 60 },
    { name: 'Сыр', price: 250 },
    { name: 'Яйца', price: 90 },
    { name: 'Масло', price: 120 },
    { name: 'Макароны', price: 70 },
    { name: 'Кофе', price: 300 },
    { name: 'Чай', price: 150 },
    { name: 'Сахар', price: 80 },
    { name: 'Соль', price: 30 },
    { name: 'Мука', price: 50 },
    { name: 'Колбаса', price: 220 },
    { name: 'Огурцы', price: 100 },
    { name: 'Помидоры', price: 110 },
    { name: 'Картофель', price: 45 },
];

// Код задания 5

for (let i = 0; i < productList.length; i++) {
    console.log(i + 1 + ". " + productList[i].name + " - " + productList[i].price + "₽")
}

/**
 * Задание 6.
 Продолжаем работать со списком продуктов:
 1. У каждого продукта уменьши цену на 20%
 2. Оставь в массиве только продукты, где цена больше 40
 Метод должен вернуть массив, где выполнены 2 вышеуказанных пункта
 **/


// Код задания 6
console.log("Задание 6")

for (let i = 0; i < productList.length; i++) {
    let ewq = productList[i].price - productList[i].price / 100 * 20
    if (productList[i].price > 40) {
        for (let q = 0; q < 1; q++)
            console.log(`${i}. ${productList[i].name} - ${ewq}₽`)
    }
}

/**
 * Задание 7.
 Напишите метод которая выводит числа от 1 до 100:
     1. Числа, кратные 3, заменяются на "Fizz".
     2. Числа, кратные 5, заменяются на "Buzz".
     3. Числа, кратные одновременно 3 и 5, заменяются на "FizzBuzz".
 **/


// Код задания 7
console.log("Задание 7")

eew = []
for (let i = 1; i <= 100; i++) {
    switch (0) {
        case i % 15:
            eew.push("FizzBuzz")
            break
        case i % 3:
            eew.push("Fizz")
            break
        case i % 5:
            eew.push("Buzz")
            break
        default:
            eew.push(i)
    }
}

console.log(eew)