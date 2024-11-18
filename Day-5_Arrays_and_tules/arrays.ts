// Declaration of array
let colors = ['Orange', 'White', 'Blue', 'Green'];
let numArray = [1, 2, 3, 4, 5];
let booleanArray = [true, false, true, false];
let dates = [new Date(), new Date('2024-11-15')];

// Flexible array
let mixArray: (string | number)[] = ['Dell', 'HP', 125000, 110000];

// Array destructuring
const [firstColor, secondColor] = colors;
console.log(`First color is -> ${firstColor}`);
console.log(`First color is -> ${secondColor}`);

// Multiple method supported
let upperCaseArray = colors.map((col) => {
  return col.toUpperCase();
});
console.log(`Upper case of colors array is -> ${upperCaseArray}`);
