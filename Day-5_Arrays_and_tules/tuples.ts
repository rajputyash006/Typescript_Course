let mobile_device = {
  brand_name: 'MI',
  Model: 'K20 Pro',
  Storage: 128,
  vartual_ram: true,
};

let mobile_1 = ['MI', 'K20 Pro', 128, true];
mobile_1[0] = 6;
mobile_1[1] = 251;
console.log(`mobile_1 -> ${mobile_1}`);

// Tuple with type
let mobile_2: [string, string, number, boolean] = ['Vivo', 'T-3 Pro', 12, true];
console.log(`mobile_2 -> ${mobile_2}`);

// Using type keyword
type Mobile = [string, string, number, boolean];

let mobile_3 = ['Poco', 'X3 Pro', 8, false];
let mobile_4 = ['Iphone', '16 Pro', 4, false];

console.log(`mobile_3 ->${mobile_3}`);
console.log(`mobile_4 ->${mobile_4}`);
