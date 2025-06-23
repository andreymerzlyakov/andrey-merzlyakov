/**
 * Задание 1.
 Напиши метод `sum(arr)`, которая возвращает сумму всех чисел в массиве.
 **/

// Код задания 1

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}

console.log(sum)

/** Задание 2.
Напиши метод `unique(arr)`, которая возвращает новый массив без повторяющихся значений.
 **/
// Код задания 2

function unique(arr) {
  return Array.from(new Set(arr))
}

console.log(unique(arr))

/**
  Задание 3.
` Напиши метод filterRange(arr, a, b)` — возвращает элементы из `arr` в диапазоне `[a, b]`.
 **/
// Код задания 3

function filterRange(arr, a, b) {
  let arr2 = []
  if (a < 0) {
    a = 0
  }
  if (b > arr.length) {
    b = arr.length
  }
  for (let i = a; i < b; i++) {
    arr2.push(arr[i])
  }
  return arr2
}

console.log(filterRange(arr, -1, 111))

/** Задание 4.
Напиши метод`sortDesc(arr)`, сортирующую числовой массив по убыванию без изменения оригинала.
 **/
// Код задания 4

function sortDesc(arr) {
  return arr.sort().reverse()
}

console.log(sortDesc(arr))

/** Задание 5.
` Напиши метод flatMapDemo(arr), которая для каждого элемента x из массива arr создаёт новый массив
  из двух элементов: [x, x * 2], а затем объединяет все эти массивы в один плоский массив.
 Используй flatMap
 **/

// Код задания 5

arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

function flatMapDemo(arr) {
  return arr.flatMap((x) => [x, x * 2])
}

console.log(flatMapDemo(arr))

/** Задание 6.
`Напиши метод groupBy(arr, keyFunc)` — группирует элементы массива по ключу,
 возвращая объект, где ключи — результат `keyFunc`.
 **/

// Код задания 6

function groupBy(arr, keyFunc) {
  let res = {}
  for (n of arr) {
    key = keyFunc(n)
    if (!res[key]) {
      res[key] = []
    }
  res[key].push(n)
  }
  return res
}

console.log(groupBy(arr, (num) => num % 2 === 0 ? 'even' : 'odd'))

/** Задание 7.
`Напиши метод rotate(arr, n)` — возвращает новый массив, в котором элементы сдвинуты вправо на `n` позиций (цикл).
 Пример: `rotate([1,2,3,4,5], 2)` → `[4,5,1,2,3]`.
 **/
 // Код задания 7

function rotate(arr, n) {
  let arr2 = []
  while (n > arr.length) {
    n -= arr.length
  }
  for (let i = arr.length - n; i < arr.length; i++) {
    arr2.push(arr[i])
  }
  for (i = 0; i < arr.length - n; i++) {
    arr2.push(arr[i])
  }
  return arr2
}

console.log(rotate([1,2,3,4,5], 6))