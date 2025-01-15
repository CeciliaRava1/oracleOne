// // 1. Ask the user what day of the week it is. If the answer is 'Saturday' or 'Sunday', show 
// // 'Good weekend!'. Otherwise, show 'Good week!'.
dayOfTheWeek = prompt('What day of the week is it?', 'Type here');
if (dayOfTheWeek == 'Saturday' || dayOfTheWeek == 'Sunday' || dayOfTheWeek == 'saturday' || dayOfTheWeek == 'sunday') {
    alert('Good weekend!');
} else {
    alert('Good week!');
}

// // 2. Check if a number entered by the user is positive or negative. Show an informative alert
// numberInput = prompt('Enter a number to know if it is positive or negative', 'Type here');
if (numberInput > 0) {
    alert(`The number ${numberInput} is positive`);
} else if (numberInput < 0) {
    alert(`The number ${numberInput} is negative`);
} else if (numberInput == 0) {
    alert(`The number ${numberInput} is neutral`);
}

// 3. Create a scoring system for a game. If the score is greater than or equal to 100, show 
// 'Congratulations, you won!'. Otherwise, show 'Try again to win.'.
const score = Math.round(Math.random() * (200 - 1) + 1);
if (score >= 100) {
    alert('Congratulations, you won! Score: ' + score);
} else {
    alert('Try again to win. Score: ' + score);
}

// 4. Create a message to inform the user about the balance of their account, using a template 
// string to include the balance value.
let userBalance = 1000;
alert(`Your balance is: ${userBalance}`);

// 5. Ask the user to enter their name using a prompt. Then, show a welcome alert using that name.
let userName = prompt('Enter your name', 'Type here');
alert(`Welcome ${userName}`);