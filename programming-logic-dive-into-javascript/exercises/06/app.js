// 1- Create a function that displays "Hello, world!" in the console.  
function helloWorld() {
    console.log('Hello world!');
}

helloWorld();

// 2- Create a function that takes a name as a parameter and displays "Hello, [name]!" in the console. 
function greet() {
    let name = document.querySelector('.name').value;
    let message = `Hello, ${name}`;
    console.log(message);
}

// 3- Create a function that takes a number as a parameter and returns double that number.  
function doubleOfNumber() {
    let number = parseInt(document.querySelector('.number').value);
    return number * 2;
}

// 4- Create a function that takes three numbers as parameters and returns their average.  
function average() {
    let numberOne = parseInt(document.querySelector('.numberOne').value);
    let numberTwo = parseInt(document.querySelector('.numberTwo').value);
    let numberThree = parseInt(document.querySelector('.numberThree').value);
    let average = (numberOne + numberTwo + numberThree) / 3;
    console.log(average);
    return average;
}

// 5- Create a function that takes two numbers as parameters and returns the greater of the two. 
function greaterNumber() {
    let numberFour = parseInt(document.querySelector('.numberFour').value);
    let numberFive = parseInt(document.querySelector('.numberFive').value);
    if (numberFour > numberFive) {
        console.log(`The greater number is ${numberFour}`);
        return numberFour;
    } else {
        console.log(`The greater number is ${numberFive}`);
        return numberFive;
    }
}

// 6- Create a function that takes a number as a parameter and returns the result of multiplying 
// that number by itself.  

function multiplyNumber() {
    let numberSix = parseInt(document.querySelector('.numberSix').value);
    let result = numberSix * numberSix;
    console.log(result);
}