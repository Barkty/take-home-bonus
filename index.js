//Prompt user for age

let userAge = prompt("Enter your age");

//Prompt user for salary

let userSalary = prompt("Enter your salary");


//If age and salary isn't entered

if (!(userAge && userSalary)) {
    alert('Please enter your age and salary');
}

//If salary is not a number

/*if (isNan(userSalary)) {
    alert("Salary should be a number");
}*/

//calculate 5% salary
fivePercent = () => {
    let salary = userSalary;
    let five = salary / 20;
    let endFive = parseFloat(five) + parseFloat(salary);
    alert("Your take-home bonus is " + `${endFive}`);
    console.log(`${endFive}`);
}

//calculate 10% of salary
tenPercent = () => {
    let salary = userSalary;
    let ten = salary / 10;
    let endTen = parseFloat(ten) + parseFloat(salary);
    alert("Your take-home bonus is " + `${endTen}`);
    console.log(`${endTen}`);
}

// calculate 20% salary
twentyPercent = () => {
    let salary = userSalary;
    let twenty = salary / 5;
    let endTwenty = parseFloat(twenty) + parseFloat(salary);
    alert("Your take-home bonus is " + `${endTwenty}`);
    console.log(`${endTwenty}`);
} 

if (userAge >= 18 && userAge <= 20) {
    fivePercent();
}

if (userAge >= 21 && userAge <= 30) {
    tenPercent();
}

if (userAge >= 31 && userAge <= 50) {
    twentyPercent();
}

