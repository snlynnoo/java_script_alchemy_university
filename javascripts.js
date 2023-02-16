// INTRO TO JAVA SCRIPT

// 1: Number Variables
const a = 3; // Immutable
let b = 3; // Mutable 
console.log(a);
console.log(typeof a);
// variables in JavaScript tend to be lowerCamelCase.
// Python and Ruby use snake case, is_logged_in.
// Upper snake case, SERVER_KEY_VALUE, is typically reserved for environment variables.

// 2: Booleans 
const loggedIn = false;
const purchasedItem = true; 

// 3: Strings
const c = "Hello";
const myName = "Dan";
const anotherName = "Cody";
const helloMessage = `Hello ${anotherName}, my name is ${myName}`
// This variable helloMessage uses backticks, now contains "Hello Cody, my name is Dan!"

// FUNCTIONS AND OPERATORS

// 4: Functions
function getNumber() {
    return 4;
}
const num = getNumber();
console.log(num);

// 4.1 Add
function addOne(input) {
    const input = input +1;
    return input;
}

function sum(a, b, c) {
    return a + b + c; 
}

// 4.2 Multiply
const x = 2;
const y = x * 3;

// 4.3 Divide 
const y = x / 3;
//  Precedence : *, / , +  - (if same, left to right order)

// Random
const myRandomNumber = Math.randon(); // 0 ~ 1 excluding 1.

// Floor
const two = Math.floor(2.2598223); // => 2

// CONDITIONALS

// 5. Conditional Statement 
// strict eqality - === (up to object type level)
// loose equality - == 

if ( 1 === 1 ) {
    console.log("Yup, that's true");
}

function isEqual(a, b) {
    if (a === b) {
        return true;
    }
}

if ( 1 !== 1 ) {
    console.log("Yup, that's true");
}

// Else
if (isRaining === true) {
    stayIndoors();
}
else {
    goOutside();
}

const a = true;

if(a === true) {
    console.log('hi!'); // hi!
}

// Simpler Way for being true
const a = true;

if(a) {
    console.log('hi!'); // hi!
}

// Greater than ( > )
function greater(first, last) {
    if (first > last) {
        return first
    }
    if (last > first) {
        return last
    }
    else {
        // none 
    }
}

// No return value
function add(a,b) {
    return a + b;
}

const value = add(2,3); // 5

function add(a,b) {
    
}

const value = add(2,3); // undefined

// Greater than or equal ( >= )
// less than or equal ( <= )
function isEnough(cost, money) {
    if ( money >= cost){
        return true;
    }
    if ( money < cost){
        return false;
    }
}

// Else if 
function canAccess(purchasedSubscription, freeTrial) {
    if(purchasedSubscription){
        return true;
    }
    else if(freeTrial){
        return true;
    }
    else {
        return false;
    }
}
