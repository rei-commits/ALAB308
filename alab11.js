// The initial 4 numbers that must be verified.
const n1 = 10; //odd number and not larger than 25 and divisible by 5.
const n2 = 15;
const n3 = 20;//odd number
const n4 = 5;


// Check if all the numbers are divisible by 5
let allDivisibleBy5 = (n1 % 5 ===0) && (n2 % 5 ===0) && (n3 % 5 ===0) && (n4 % 5 ===0);
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);

// Check if the first number is larger than the last
let firstLargerThanLast = n1 > n4;
console.log(`First number larger than last: ${firstLargerThanLast}`);

// Accomplish the arithmetic chain
let result = ((n2 - n1) * n3) % n4;
console.log(`Arithmetic chain result: ${result}`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator
let is25OrLess = result <= 25;
console.log(`Result is 25 or less: ${is25OrLess}`);

//Part 2: Practical Math

const totalDistance = 1500; // in miles
const fuelBudget = 175; // in dollars
const FuelCostPerGallon = 3; // in dollars per gallon

// Lets define the fuel and the speed
const speed55 = 55; // all these are miles per hour
const speed60= 60;
const speed75= 75;

const mpg55= 30; // all these are miles per gallon
const mpg60= 28;
const mpg75 = 23;

//  cal gallon for each of the speed

const gallonsNeeded55 = totalDistance / mpg55;
const gallonsNeeded60 = totalDistance / mpg60;
const gallonsNeeded75 = totalDistance / mpg75;

// The fuel expense for each speed
const fuelExpense55 = gallonsNeeded55 * FuelCostPerGallon;
const fuelExpense60 = gallonsNeeded60 * FuelCostPerGallon;
const fuelExpense75 = gallonsNeeded75 * FuelCostPerGallon;

// Trip Duration
const tripDuration55 = totalDistance / speed55;
const tripDuration60 = totalDistance / speed60;
const tripDuration75 = totalDistance / speed75;

// Now here lets check if the budget is enough for each speed
const isBudgetEnough55 = fuelExpense55 <= fuelBudget;
const isBudgetEnough60 = fuelExpense60 <= fuelBudget;
const isBudgetEnough75 = fuelExpense75 <= fuelBudget;


// Log the results of the calculation using string con or temps
console.log(`At 55 mpg:
Gallons needed: ${gallonsNeeded55}
Fuel cost: ${fuelExpense55}
Trip duration: ${tripDuration55} hours
Budget enough: ${isBudgetEnough55 ? "Yes" : "No"}`);

console.log(`At 60 mph:
Gallons needed: ${gallonsNeeded60}
Fuel cost: ${fuelExpense60}
Trip duration: ${tripDuration60} hours
Budget enough: ${isBudgetEnough60 ? "Yes" : "No"}`);

console.log(`At 75 mph:
Gallons needed: ${gallonsNeeded75} 
Fuel cost: ${fuelExpense75}
Trip duration: ${tripDuration75} hours
Budget enough: ${isBudgetEnough75 ? "Yes" : "No"}`)




