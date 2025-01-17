// Change the content of the h1 tag using document.querySelector and assign the following text: 
// "Challenge Time".

// Create a function that logs the message "The button was clicked" to the console whenever 
// the "Console" button is pressed.

// Create a function that executes when the "prompt" button is clicked, asking for the name of a 
// city in Brazil. Then, display an alert with the message concatenating the response 
// with the text: "I was in {city} and thought of you".

// Create a function that displays an alert with the message: "I love JS" whenever 
// the "Alert" button is pressed.

// When the "sum" button is clicked, ask for 2 numbers and display the result of the sum in an alert.


let title = document.querySelector('h1');
title.innerHTML = 'Challenge time';

function consoleButton() {
    alert('The button has clicked');
};

function promptButton() {
    let brazilCity = prompt('Enter a city of Brazil', '');
    alert(`I was in ${brazilCity} and thought of you`);
};

function alertButton() {
    alert('I love JS');
}

function sumButton() {
    let numberOne = parseInt(prompt('Enter a number'));
    let numberTwo = parseInt(prompt('Enter another number'));
    let result = numberOne + numberTwo;
    alert(`The sum of ${numberOne} plus ${numberTwo} is ${result}`);
}