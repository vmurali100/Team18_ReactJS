
function isEven(num) {
    return num % 2 === 0;
}
let numbers = [1, 3, 5, 6, 7, 9, 10];
let firstMatch = numbers.find(isEven);

console.log(firstMatch);

