// 1. Create a counter that starts at 1 and goes to 10 using a 'while' loop. Show each number.
let counter = 1;

while (counter <= 10) {
    console.log(counter);
    counter ++;
}

// 2. Create a counter that starts at 10 and goes down to 0 using a 'while' loop. Show each number.
let counterTwo = 10;

while (counterTwo >= 0) {
    console.log(counterTwo);
    counterTwo --;
}

// 3. Create a countdown program. Ask for a number and count from 0 to that number using a 'while' 
// loop in the browser console.
let numberInput = prompt('Enter a number to count', 'Type here');
let counterThree = 0;

while (counterThree <= numberInput) {
    console.log(counterThree);
    counterThree ++;
}
