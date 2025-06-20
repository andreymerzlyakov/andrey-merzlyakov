
/**
 * Задание 1.
 * Напиши функцию `delayLog(msg, ms)`, которая выводит сообщение `msg` в консоль через `ms` миллисекунд.
 * Пример:
 * delayLog("Привет", 1000); // выведет "Привет" через 1 секунду
 **/

// Код задания 1

function delayLog(msg, ms) {
    setTimeout(() => console.log(msg), ms);
}

// delayLog("Hello world!", 1000)

/**
 * Задание 2.
 * Напиши функцию `sequentialLogs()`, которая выводит 1, 2 и 3 с интервалами в 1, 2 и 3 секунды соответственно.
 **/

// Код задания 2

function sequentialLogs() {
    setInterval(() => console.log(1), 1000)
    setInterval(() => console.log(2), 2000)
    setInterval(() => console.log(3), 3000)
}

// sequentialLogs()

/**
 * Задание 3.
 * Напиши функцию `checkNumber(num)`, возвращающую Promise.
 * Если число больше 10 — промис должен выполниться с "OK", иначе — отклониться с "Too small".
 **/

// Код задания 3

function checkNumber(num) {
    return new Promise((more, less) => {
        if (num > 10) {
            more("OK");
        } 
        else {
            less("Too small");
        }
    });
}

checkNumber(11)
    .then(result => console.log(result))
    .catch(error => console.log(error))

/**
 * Задание 4.
 * Напиши функцию `fakeFetch(url)`, которая возвращает промис.
 * Он "загружает" данные через 2 секунды, возвращая сообщение `${url} loaded`.
 **/

// Код задания 4

function fakeFetch(url) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`${url} loaded`)
        }, 2000)
    })
}

 fakeFetch('../assets')
    .then(result => console.log(result))

/**
 * Задание 5.
 * Создай цепочку промисов, которая:
 * 1. Удваивает число 5.
 * 2. Прибавляет 10.
 * 3. Делит результат на 3.
 * 4. Выводит финальный результат.
 **/

// Код задания 5

function chainpromise (value, operation) {
    return new Promise ((resolve) => {
        const result = operation(value)
//       console.log(result)
        resolve(result)
    })
}

Promise.resolve(5)
    .then(value => chainpromise(value, n => n * 2))
    .then(value => chainpromise(value, n => n + 10))
    .then(value => chainpromise(value, n => n / 3))
    .then(finalResult => {console.log(finalResult)})

/**
 * Задание 6.
 * Напиши async-функцию `loadData`, которая вызывает `fakeFetch(url)` с использованием async/await.
 * Обработай ошибку с помощью try...catch.
 **/

// Код задания 6

async function loadData(url) {
    try {
        return await fakeFetch(url);
    } catch (error) {
        return console.error("Ошибка")
    }
}

loadData("https://github.com")
    .then(res => console.log(res))
    .catch(err => console.error(err))

/**
 * Задание 7.
 * Напиши функцию `loadAll(urls)`, которая использует Promise.all для параллельной загрузки массива URL.
 * После загрузки выведи все результаты.
 **/

// Код задания 7

function loadAll(urls){
    Promise.all(urls).then(
        (value) => {
            console.log(value)
        }
    )
}

loadAll([
    new Promise(resolve => setTimeout(() => resolve(1), 5000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000))
])

/**
 * Задание 8.
 * Напиши функцию `loadFirst(urls)`, которая использует Promise.race.
 * Она должна вернуть результат самого первого завершившегося запроса.
 **/

// Код задания 8

function loadFirst(urls){
        Promise.race(urls).then(
        (value) => {
            console.log(value)
        }
    )
}

loadFirst([
    new Promise(resolve => setTimeout(() => resolve(4), 11000)),
    new Promise(resolve => setTimeout(() => resolve(5), 6000)),
    new Promise(resolve => setTimeout(() => resolve(6), 10000))
])

/**
 * Задание 9.
 * Напиши функцию `processSequentially(arr, asyncFn)`, которая вызывает `asyncFn` для каждого элемента массива последовательно.
 **/

// Код задания 9

async function processSequentially(arr, asyncFn) {
    let res = []
    for (let i of arr) {
        res.push(await asyncFn(i))
    }
    return res
}

// processSequentially(["a", "b", "c"], loadAll)

/**
 * Задание 10.
 * Напиши функцию `sleep(ms)`, которая возвращает промис, завершающийся через указанное количество миллисекунд.
 **/

// Код задания 10

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

sleep(10000)
    .then(() => {console.log("Success")})