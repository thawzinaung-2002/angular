let lname: string;
lname = "John";
let newName = lname.toUpperCase();
console.log(newName);

let age:number = 20;

let isValid:boolean = false;
console.log(isValid);

let empList:string[];
empList = ["ABC", "DEF", "GHI"];

let numList: Array<number>;
numList = [1, 2,3, 4];


let result = numList.filter(num => num>2);
console.log(result);

const enum Color {
    RED, GREEN, BLUE
}

let c: Color = Color.GREEN;


let swapNum:[number, number];

function swapNumbers(num1: number, num2:number): [number, number] {
    return [num2, num1];
}


swapNum = swapNumbers(10, 20);


let department: any;

department = "IT";
department = 10;

