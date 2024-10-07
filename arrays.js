let fruits = ['apple', 'banana', 'orange'];
let numbers = [3, 1, 5, 2, 4];

function addFruit(arr, fruit) {
    arr.push(fruit);
    return arr;
}

function removeLastFruit(arr) {
    arr.pop();
    return arr;
}

function sortNumbers(arr) {
    arr.sort((a, b) => a - b);
}

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

function evenNumbers(arr) {
    return arr.filter(num => num % 2 == 0);
}

function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


console.log(fruits);
console.log(addFruit(fruits, "mango"));
console.log(removeLastFruit(fruits));
console.log(numbers);
sortNumbers(numbers);
console.log(numbers);
console.log(doubleNumbers(numbers));
console.log(evenNumbers(numbers));
console.log(calculateSum(numbers));