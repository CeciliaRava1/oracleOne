// 1. Create a program that uses console.log to display a welcome message.
let welcomeMessage = 'Welcome to my website!';
console.log(welcomeMessage);

// 2. Create a variable called "name" and assign it your name. Then, use console.log to display 
// the message "Hello, [your name]!" in the browser's console.
let nameUser = 'Lia';
console.log(`Hello, ${nameUser}`)
                
// 3. Create a variable called "name" and assign it your name. Then, use alert to display the message 
// "Hello, [your name]!".
let nameUserTwo = 'Lia';
alert(`Hello, ${nameUserTwo}`);

// 4. Use prompt to ask the question: What is the programming language you like the most? Then, 
// store the answer in a variable and display the answer in the browser's console
favoriteLanguage = prompt('What is the programming language you like the most?', 'Type here');
console.log(favoriteLanguage);

// 5. Create a variable called "value1" and another called "value2," assigning them numeric 
// values of your choice. Then, add these two values and store the result in a third variable 
// called "result." Use console.log to display the message 
// "The sum of [value1] and [value2] is [result]." in the console.
let value1 = 1;
let value2 = 2;
let result = value1 + value2;
let message = `The sum of ${value1} and ${value2} is ${result}.`
console.log(message);

// 6. Create a variable called "value1" and another called "value2," assigning them numeric 
// values of your choice. Then, subtract these two values and store the result in a third variable 
// called "result." Use console.log to display the message 
// "The difference between [value1] and [value2] is [result]." in the console.
let valueOne = 1;
let valueTwo = 2;
let resultOne = valueOne - valueTwo;
let messageOne = `The difference between ${valueOne} and ${valueTwo} is ${resultOne}.`
console.log(messageOne);

// 7. Ask the user to enter their age using prompt. Based on the entered age, use an if statement 
// to check if the person is an adult or a minor, and display an appropriate message in the console.
let ageUser = prompt('Enter your age', '');
if (ageUser >= 18) {
    console.log('You are an adult')
} else {
    console.log('You are a child');
}

// 8. Use Math.random to generate any random number and display that number in the console.
let randomNumber = Math.round(Math.random() * 1000);
console.log(randomNumber); 

// 9. Use Math.random to generate an integer between 1 and 10 and display that number in the console.
let randomNumberOne = Math.round(Math.random() * 10);
console.log(randomNumberOne); 