// Boolean Type
let paymentStatus: boolean = true;
console.log(`Boolean type in Typescript -> ${paymentStatus}`);

// Number Type
let age: number = 30;
console.log(`Number type in Typescript -> ${age}`);

// String Type
let Name: string = 'Yash';
console.log(`String type in Typescript -> ${Name}`);

// Array Type
let array_1: number[] = [1, 2, 3, 4, 5];
let array_2: Array<number> = [6, 7, 8, 9, 10];
console.log(`First way to write array -> ${array_1}`);
console.log(`Second way to write array -> ${array_2}`);

// Tuple Type
let tuple: [string, number];
tuple = [Name, age];
console.log(`Tuple type at index 0 data -> ${tuple[0]}`);
console.log(`Tuple type at index 1 data -> ${tuple[1]}`);

// Enum Type
enum Color_1 {
  'red',
  'Blue',
  'Orange',
  'Black',
  'Green',
}

let color_1: Color_1 = Color_1.Orange;
console.log(`Enum type in Typescript -> ${color_1}`);

enum Color_2 {
  'Orange' = 1,
  'White',
  'Green',
}

let color_2: string = Color_2[2];
console.log(
  `Enum type in Typescript with change starting with 1 -> ${color_2}`
);

// Unknown Type
let unsure: unknown = 25;
console.log(`Unkown type with number data -> ${unsure}`);
unsure = 'Not sure what is the data type';
console.log(`Unkown type with string data -> ${unsure}`);
unsure = true;
console.log(`Unkown type with boolean data -> ${unsure}`);

// Any type
let returnUserData = (userInput: string): any => {
  if (userInput == 'name') {
    return Name;
  }
  if (userInput == 'age') {
    return age;
  }
  if (userInput == 'paymentStatus') {
    return paymentStatus;
  } else {
    return 'any type can be return';
  }
};
console.log(`Any type with string -> ${returnUserData('name')}`);
console.log(`Any type with number -> ${returnUserData('age')}`);
console.log(`Any type with boolean -> ${returnUserData('paymentStatus')}`);
console.log(`Any type with username -> ${returnUserData('username')}`);

// Void Type
let printInput = (userInput: any): void => {
  console.log(`Void type in Typescript input->${userInput}`);
};

printInput(`Payment status is ${paymentStatus} for the user ${Name}`);
