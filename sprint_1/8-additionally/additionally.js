// Код задания 1
/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {

    return function () {
        console.log(n)
        n = n + 1
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

// Код задания 2
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = function(nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init
};

console.log(reduce (
    nums = [1,2,3,4],
    fn = function sum(accum, curr) { return accum + curr; },
    init = 0
))

// Код задания 3
/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    let cache = {}
    return function(...args) {
        let  n = args[0]
        if (n in cache) {
            return cache[n]
        }
        else {
            let res = fn(n)
            cache[n] = res
            return res
        }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1


// Код задания 4
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
let addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([num1, num2]) => num1 + num2);
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4


// Код задания 5

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    const n = []
    let i = 0
    while (i < arr.length) {
        n.push(arr.slice(i, i + size))
        i += size
    }
    return n
};

console.log(chunk([8,5,3,2,6], 6))

// Код задания 6

// Код задания 7

// Код задания 8

// Код задания 9

// Код задания 10
