# 📌 Основы массивов в JavaScript

Массив — это упорядоченная коллекция данных, которая хранит элементы по индексам, начиная с нуля. Массивы позволяют хранить любые типы данных: числа, строки, объекты и даже другие массивы.

## 🔹 Создание массива

Для создания массива используют литерал:
```javascript
const fruits = ['яблоко', 'банан', 'вишня'];
```
Или конструктор:
```javascript
const numbers = new Array(1, 2, 3);
```
Однако литерал массива используется чаще и удобнее.

## 🔹 Доступ к элементам и изменение

Доступ к элементам массива осуществляется через индекс:
```javascript
console.log(fruits[0]); // 'яблоко'
```
Последний элемент можно получить так:
```javascript
console.log(fruits[fruits.length - 1]);
```
Для изменения элемента по индексу:
```javascript
fruits[1] = 'апельсин';
console.log(fruits); // ['яблоко', 'апельсин', 'вишня']
```

## 🔹 Свойство length

Свойство `length` возвращает количество элементов массива и может быть изменено для усечения массива:
```javascript
console.log(fruits.length); // 3
fruits.length = 2;
console.log(fruits); // ['яблоко', 'апельсин']
```

## 🔹 Добавление и удаление элементов

- `push(element)` — добавляет элемент в конец массива:
```javascript
fruits.push('груша');
```
- `pop()` — удаляет последний элемент и возвращает его:
```javascript
const last = fruits.pop();
```
- `unshift(element)` — добавляет элемент в начало массива:
```javascript
fruits.unshift('киви');
```
- `shift()` — удаляет первый элемент и возвращает его:
```javascript
const first = fruits.shift();
```

## 🔹 Перебор массива

- Цикл `for`:
```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```
- Цикл `for...of`:
```javascript
for (const fruit of fruits) {
  console.log(fruit);
}
```
- Метод `forEach`:
```javascript
fruits.forEach(fruit => console.log(fruit));
```

## 🔹 Поиск элементов

- `includes(value)` — возвращает `true`, если элемент найден:
```javascript
console.log(fruits.includes('банан')); // true
```
- `indexOf(value)` — возвращает индекс или `-1`, если не найден:
```javascript
console.log(fruits.indexOf('банан')); // 1
```
- `fingIndex(value)` — возвращает индекс или `-1`, если не найден:
```javascript
console.log(fruits.findIndex('банан')); // 1
```

- `some(value)` — Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
```javascript
console.log(fruits.some((item) => item === 'банан'); // true
```

## 🔹 Модификация массива: `splice` и `slice`

- `splice(start, deleteCount, ...items)` — удаляет и/или добавляет элементы:
```javascript
fruits.splice(1, 1, 'груша'); // удалить 1 элемент с индекса 1 и вставить 'груша'
console.log(fruits); // ['яблоко', 'груша', 'вишня']
```
- `slice(start, end)` — возвращает новый массив с копией части исходного:
```javascript
const newFruits = fruits.slice(0, 2);
console.log(newFruits); // ['яблоко', 'груша']
```

## 🔹 Преобразование массива

- `map(callback)` — создаёт новый массив из результатов вызова функции:
```javascript
const lengths = fruits.map(fruit => fruit.length);
console.log(lengths); // [6, 5, 6]
```
- `filter(callback)` — создаёт новый массив из элементов, для которых функция вернула `true`:
```javascript
const filtered = fruits.filter(fruit => fruit.includes('я'));
console.log(filtered); // ['яблоко', 'вишня']
```
- `reduce(accumulator, currentValue)` — применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```

## 🔹 Другие полезные методы

- `concat(array2)` — объединяет два массива:
```javascript
const allFruits = fruits.concat(['ананас', 'манго']);
```
- `join(separator)` — объединяет все элементы массива в строку через разделитель:
```javascript
console.log(fruits.join(', ')); // 'яблоко, груша, вишня'
```
- `reverse()` — меняет порядок элементов массива на обратный:
```javascript
fruits.reverse();
```
- `sort()` — сортирует элементы массива (по умолчанию как строки):
```javascript
fruits.sort();
```

---

# 🎯 Итог

Массивы — это фундаментальная структура данных в JavaScript с множеством встроенных методов для создания, доступа, изменения и перебора элементов. Для эффективного кода важно использовать подходящие методы и понимать их поведение.

---
