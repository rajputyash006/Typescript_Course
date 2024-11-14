// String annotation
let userName: string = 'Yash';
console.log(`String annotation -> ${userName}`);

// Number annotation
let userAge: number = 30;
console.log(`Number annotation -> ${userAge}`);

// Boolean annotation
let payAmountStatus: boolean = true;
console.log(`Boolean annotation -> ${payAmountStatus}`);

// Null annotation
let nullData: null = null;
console.log(`Null annotation -> ${nullData}`);

// Undefine annotation
let undefineData: undefined = undefined;
console.log(`Undefine annotation -> ${undefineData}`);

// Array annotation
let numArray_1: number[] = [1, 2, 3, 4, 5];
console.log(`Num Array annotation -> ${numArray_1}`);
let strArray: string[] = ['Orange', 'White', 'Green'];
console.log(`String Array annotation -> ${strArray}`);
let boolArray: boolean[] = [true, false, true];
console.log(`Boolean Array annotation -> ${boolArray}`);

// Array annotation second way
let numArray_2: Array<number> = [6, 7, 8, 9, 10];
console.log(`Second way Array annotation -> ${numArray_2}`);

// Object annotation
let obj: { name: string; age: number } = { name: userName, age: userAge };
console.log(`Object annotation -> ${obj['name']}`);

// Class annotation
class Car {}
let car: Car = new Car();

// Function annotation
let fetchUserData: (usrInput: string) => any = (usrInput) => {
  if (usrInput === 'name') {
    return userName;
  }
  if (usrInput === 'age') {
    return userAge;
  }
  if (usrInput === 'payment') {
    return payAmountStatus;
  } else {
    return 'No data found';
  }
};
let payStatus = fetchUserData('payment');
console.log(`user pay status is ${payStatus}`);

// Inference in Typescript
// Type inference refers to the automatic detection of the type of a variable.
let num = 25;
let color = 'Orange';
let boolValue = true;
let nullValue = null;
let undefineValue = undefined;
let numArr = [1, 2, 3, 4, 5];
let strArr = ['Orange', 'White', 'Blue', 'Green'];
let boolArr = [true, false, true, false];
