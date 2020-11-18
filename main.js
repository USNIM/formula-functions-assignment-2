// Formula of Volume of Cylinder

// HTML Elements
let calcBtnEl = document.getElementById("calc");
let inputEl1 = document.getElementById("valueA");
let inputEl2 = document.getElementById("valueB");
let inputEl3 = document.getElementById("valueC");
let outputEl = document.getElementById("output");

// Event Listener
calcBtnEl.addEventListener("click", calculate);

// Event Function
function calculate() {
    // Get inputs
    let valueA = +inputEl1.value;
    let valueB = +inputEl2.value;
    let valueC = +inputEl3.value;
    
    // Calculate & Output
    outputEl.innerHTML = formulaFunction1(valueA, valueB, valueC) + " , " + formulaFunction2(valueA, valueB, valueC);
}

function formulaFunction1(a, b, c) {
    return (- b + Math.sqrt(b * b - (4 * a * c))) / (2 * a);
}

function formulaFunction2(a, b, c) {
    return (- b - Math.sqrt(b * b - (4 * a * c))) / (2 * a);
}