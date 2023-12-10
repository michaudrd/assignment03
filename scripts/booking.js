/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
    //All of the below variables are initialized.
// When do they need to be reset or updated?
    //The numberOfDays variable is reset when clearing the days.

let numberOfDays = 0;
const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thu = document.getElementById("thursday");
const fri = document.getElementById("friday");
const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mon.addEventListener("click", function(){
    dayClicked(mon);
});
tue.addEventListener("click", function(){
    dayClicked(tue);
});
wed.addEventListener("click", function(){
    dayClicked(wed);
});
thu.addEventListener("click", function(){
    dayClicked(thu);
});
fri.addEventListener("click", function(){
    dayClicked(fri);
});


function dayClicked(dayElement){
    const dayIsClicked = dayElement.classList.contains("clicked");
    dayElement.classList.toggle("clicked", !dayIsClicked);
    if (!dayIsClicked){
        numberOfDays += 1;
    } 
    else{
        numberOfDays -= 1;
    }
    calculateCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function(){
    clearDays();
});

function clearDays(){
    [mon, tue, wed, thu, fri].forEach(function(dayElement){
        dayElement.classList.remove("clicked");
    });
    fullDay.classList.remove("clicked");
    halfDay.classList.remove("clicked");
    numberOfDays = 0;
    calculateCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

halfDay.addEventListener("click", function(){
    timeButtonClicked(halfDay);
});
fullDay.addEventListener("click", function(){
    timeButtonClicked(fullDay);
});

function timeButtonClicked(button){
    fullDay.classList.toggle("clicked", button == fullDay);
    halfDay.classList.toggle("clicked", button == halfDay);
    calculateCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost(){
    let dailyCost;
    let dailyCostMultiply = 1;

    if (halfDay.classList.contains("clicked")){
        dailyCost = 20;
    }
    else{
        dailyCost = 35;
    }

    const total = dailyCost * dailyCostMultiply * numberOfDays;
    calculatedCost.innerHTML = total.toString();
}