var car = "Toyota";
car = "Benz";

console.log(car);

// let age = 12
// age = 10

// let x = 10
// let b = 10

//console.log(b !== x)

//let isMarried = false
//console.log(
// !isMarried ? 'congratulations' : 'Go and get married'
//)

//Operators and Operations

//Mathematical, logical, comparisims operators

//+ addition
//* Multiplication
//- Subtraction
// / Division
// ++ incrementation
// -- decrementation
// === strictly equal to
// !== not strictly equal to
// > greater than
// < less than
// >= greater or equal to
// <= less or equal to

// logical Operators
// && logical AND
// || logical OR
// ! logical NOT

//Data Types

//Strings
//Number
//Boolean
//Null
//Array
//Object
//undefined

//boolean true or false
/*
let a
let c = ''
let b = null

console.log(a) 
console.log(b)
console.log(c)
 */

let a = "10";

//integer 10
// 10.0 float
//number 10, 10.0

console.log(typeof Number(a));

//let a = null
// a == null ? 'Empty' : a

console.log(eval(10 + "+" + 10));

let arr = [];
let object = {};

let users = ["Josh", "Joe"];

let allusers = [
  {
    name: "Joe",
    age: 25,
    isMarried: false,
    hobbies: ["Sport", "Reading"],
  },
  {
    name: "Josh",
    age: 20,
    isMarried: true,
    hobbies: ["Vollyball", "Traveling"],
  },
  //nested array
  {
    name: "Joe",
    age: 25,
    isMarried: false,
    hobbies: [
      {
        name: "Josh",
        age: 20,
        isMarried: true,
      },
    ],
  },
];

//string Methods

let date = "2023-10-25T111:23.20.032zzY";

//substring and slice

console.log(date.substring(0, 10));
console.log(date.substring(0, 11));
console.log(date.substring(18, 8));
console.log(date.slice(0, date.length - 1));
console.log(date.substring(2));

//split() converts an string to an array
let numbers = "1, 2, 4, 45, 47, 10, 2789, 234";
console.log(numbers.split(","));

//join() converts an array to a string
let arrY = ["2", "3", "a", "b"];

console.log(arrY.join(","));

//arryJoin.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
// [...arryJoin].map((word) => word.charAt(0).toUpperCase() + word.slice(1));

//NumsArray
let NumsArray = [1, 2, 4, 45, 47, 10, 2789, 234];

console.log(NumsArray.reduce((a, b) => a + b));
console.log(NumsArray.find((item) => item == 5));
console.log(NumsArray.map((Nums) => Nums == 5));

let staffs = [
  {
    name: "James",
    age: 55,
    role: "Developer",
  },
  {
    name: "Mark",
    age: 17,
    role: "Cleaner",
  },
  {
    name: "Oyindamola",
    age: 23,
    role: "FullStack Dev",
  },
  {
    name: "Tehilla",
    age: 20,
    role: "Frontend Dev",
  },
  {
    name: "Tehil",
    age: 19,
    role: "UI/UX",
  },
];

const mappedStaffs = staffs
  .map((staff) => {
    return `
  <div>
  <p>${staff.name} </p>
  <p>${staff.age} </p>
  <b>${staff.role} </b>
  </div>
  
  `;
  })
  .join(" ");

document.getElementById("staffsDetails").innerHTML = mappedStaffs;
console.log(staffs.map((staff) => staff.age * 2));

// console.log(staffs[0]?.age);
// console.log(users && users.staffs?.name);
// console.log(staffs.map((staff) => staff));
// //console.log(staffs.find((staff) => staff.name.toLowerCase().includes('teh')));
// console.log(staffs.map((staff) => staff.name.toLowerCase().includes("teh")));

// let overAge = staffs.filter((staff) => staff.age > 18);
// console.log(overAge);

// console.log(staffs.map((staff) => staff.name));

// //for loop
// const arrayofNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
// for (i = 0; i < arrayofNumbers.length; i++) {
//   const resultArray = arrayofNumbers[i];
//   console.log(resultArray);
// }

//do while & while loop

let start = 0;

while (start < 10) {
  let result = start++;

  if (start == 0) {
    continue;
  }
  console.log(result);
}

do {
  let result = start++;

  if (start == 6) {
    continue;
  }
  console.log(result);
} while (start < 10);
