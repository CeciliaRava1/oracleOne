listOfNumbers = [2, 5, 10, 24];
let averageValue = 0;
largestNumber = listOfNumbers[0];
smallestNumber = listOfNumbers[0];


// 1. Create an empty list called "genericList".
let genericList = [];

// 2. Create a list of programming languages called "programmingLanguages" with the following 
// elements: 'JavaScript', 'C', 'C++', 'Kotlin', and 'Python'.
let programmingLanguages = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Add the following elements to the "programmingLanguages" list: 'Java', 'Ruby', and 'GoLang'.
programmingLanguages.push('Java', 'Ruby', 'GoLang');

// 4. Create a function that displays all the elements of the "programmingLanguages" list in the console.
function displayLanguages() {
    for (let i = 0; i < programmingLanguages.length; i++) {
        console.log(programmingLanguages[i]);
    }
}

// 5. Create a function that displays all the elements of the "programmingLanguages" list in reverse 
// order.

function displayElements() {
    for (let i = programmingLanguages.length; i > 0; i--) {
        console.log(programmingLanguages[i]);
    }
}


// 6. Create a function that calculates the average of the elements in a list of numbers.
function average() {
    for (let i = 0; i < listOfNumbers.length; i++) {
        averageValue += listOfNumbers[i];
    }
    averageValue = averageValue / listOfNumbers.length;
}

// 7. Create a function that displays the largest and smallest numbers in a list in the console.
function smallestLargest() {
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers[i] > largestNumber) {
            largestNumber = listOfNumbers[i];
        }
    
        if (listOfNumbers[i] < smallestNumber) {
            smallestNumber = listOfNumbers[i];
        }
    }

    console.log(`Largest number: ${largestNumber}`)
    console.log(`Smallest number: ${smallestNumber}`)
}


// 8. Create a function that returns the position in the list where an element passed as a parameter 
// is located, or -1 if it does not exist in the list.

function hola() {
    
}

// 9. Create a function that receives two lists of numbers of the same size and returns a new list 
// with the sum of the elements one by one.

// 10. Create a function that receives a list of numbers and returns a new list with the square of 
// each number.