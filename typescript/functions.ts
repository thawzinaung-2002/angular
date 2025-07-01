function add(a:number, b:number): number {
    return a+b;
}

console.log(add(2, 3));

const sub = (num1:number, num2: number, num3?: number) : number => num3 ? num3 + num1 - num2 : num1- num2;
console.log((sub(5, 3)));

const multi = function (num1: number, num2: number, num3=4): number {
    return num1 * num2;
}


function add2(num1: number, num2: number, ...num3:number[]) : number {
    return num1+num2+ num3.reduce((a, b) => a+b);
}

const nums = [1, 2, 3];
console.log(add2(3, 3, ...nums));
console.log(add2(4, 4, 5, 5, 5));


function getItems<T>(items: T[]) : T[] {
    return new Array<T>().concat(items);
}
let concatNums = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d"]);


