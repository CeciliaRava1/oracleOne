function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}



// 1. Create a function that calculates a person's body mass index (BMI) from their height in meters 
// and weight in kilograms, which will be received as parameters.
function calculateBMI() {
    personWeight = parseFloat(document.getElementById('weight').value);
    personHeight = parseFloat(document.getElementById('height').value);
    console.log(personWeight);
    console.log(personHeight);

    let bmi = Number(personWeight / (personHeight * personHeight).toFixed(2));
    assignTextToElement('h1', `Your BMI is ${bmi}`);
}

// 2. Create a function that calculates the factorial value of a number passed as a parameter.
function calculateFactorial() {
    let number = parseInt(document.getElementById('factorial').value); 
    let result = factorialize(number);
    assignTextToElement('h2', `Your factorial is ${result}`);
}

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

// 3. Create a function that converts a value in dollars, passed as a parameter, and returns the 
// equivalent value in Brazilian reais (you can use the dollar value from your own country if you prefer). 
// For this, consider the dollar exchange rate to be R$4.80.
function convertsArgentinePesoToDollar() {

}

// 4. Create a function that displays the area and perimeter of a rectangular room on the screen, 
// using the height and width that will be provided as parameters.
function calculateRectangleArea() {

}

// 5. Create a function that displays the area and perimeter of a circular room on the screen, 
// using its radius which will be provided as a parameter. Assume Pi = 3.14.
function calculateCircleArea() {

}

// 6. Create a function that displays the multiplication table of a number given as a parameter.
function showMultiplicationTable() {

}