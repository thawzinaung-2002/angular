"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
const sub = (num1, num2, num3) => num3 ? num3 + num1 - num2 : num1 - num2;
console.log((sub(5, 3)));
const multi = function (num1, num2, num3 = 4) {
    return num1 * num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
const nums = [1, 2, 3];
console.log(add2(3, 3, ...nums));
console.log(add2(4, 4, 5, 5, 5));
function getItems(items) {
    return new Array().concat(items);
}
let concatNums = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d"]);
