let person = {
  name: 'Yash Rajput',
  age: 30,
  email: 'raputyash006@gmail.com',
  register: true,
};

// simple way to print object in Typescript
let printUser = (personDetails: {
  name: string;
  age: number;
  email: string;
  register: boolean;
}) => {
  console.log('Printing user details with simple function');
  console.log(`Person name is ${personDetails.name}`);
  console.log(`Person age is ${personDetails.age}`);
  console.log(`Person email is ${personDetails.email}`);
  console.log(`Person register with our App? ${personDetails.register}`);
};

printUser(person);

// For type safty using interface
interface Person {
  name: string;
  age: number;
  email: string;
  register: boolean;
}

let printUserInterface = (personDetails: Person) => {
  console.log('Printing user details with interface');
  console.log(`Person name is ${personDetails.name}`);
  console.log(`Person age is ${personDetails.age}`);
  console.log(`Person email is ${personDetails.email}`);
  console.log(`Person register with our App? ${personDetails.register}`);
};

printUserInterface(person);

// Reusability of code with the help of interface

interface printData {
  printData(): string;
}

let person_2 = {
  user_name: 'Abhi Pandey',
  age: 30,
  email: 'pandeyabhi123@gmail.com',
  register: false,
  printData(): string {
    return `Person name is ${this.user_name} and person registration is ${this.register}`;
  },
};

let printData = (data: printData): void => {
  console.log(data.printData());
};

printData(person_2);

let bike = {
  bike_owner: 'Yash Rajput',
  bike_name: 'Sp-125',
  bike_cc: 125,
  rto_paid: true,
  printData(): string {
    return `Bike owner name is ${this.bike_name} and rto fees paid status ${this.rto_paid}`;
  },
};

printData(bike);
