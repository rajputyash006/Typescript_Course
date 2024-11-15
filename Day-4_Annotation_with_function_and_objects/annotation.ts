// Declaration Function veriable type.

const addNumber: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
let result = addNumber(30, 21);
console.log(`Result of two number addition -> ${result}`);

// Declaration Function Types
// Way-1
const addNum = (a: number, b: number): number => {
  return a + b;
};
result = addNum(51, 50);
console.log(`Result of two number addition -> ${result}`);

// Way-2
function subtract(a: number, b: number): number {
  return a - b;
}
console.log(`subtraction of two number is -> ${subtract(21, 10)}`);

// Way-3
let division = function (a: number, b: number) {
  return a / b;
};
console.log(`Division of two number is -> ${division(102, 2)}`);

// Object destructuring
let userData = {
  user_name: 'yash',
  email: 'rajputyash006@gmail.com',
  mobile: '9033757101',
  location: {
    lat: 21.17,
    lan: 72.96,
  },
  address: {
    house_num: 76,
    city: 'Vesu Surat',
    state: 'Gujarat',
    pin_code: '394327',
  },
};

// basic destructuring
const { user_name, mobile }: { user_name: string; mobile: string } = userData;
console.log(`Name of the user is ${user_name} and mobile number is ${mobile}`);

// nasted object destructuring
const {
  location: { lat, lan },
}: { location: { lat: number; lan: number } } = userData;

console.log(`Location of a user is lat -> ${lat} and lan -> ${lan}`);

const {
  address: { house_num, city, state, pin_code },
}: {
  address: { house_num: number; city: string; state: string; pin_code: string };
} = userData;
console.log(
  `Address of the user is -> ${house_num}, ${city},${state}-${pin_code}`
);
