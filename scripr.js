// birth year calculater
var name=(prompt("What is your name?"));
var age=(prompt("What is your age?"));
var year=(prompt("What year is it?"));

 var birthYear= year - age;
alert("Hello, " + name + "! You were born in " + birthYear + ".");

// bill divider in perPerson

var firstItemPrice=Number(prompt("enter first item Price"))
var secondItemPrice=Number(prompt("enter second item Price"))
var thirdItemPrice=Number(prompt("enter third item Price"))

 var TotalBill=(firstItemPrice + secondItemPrice + thirdItemPrice)
 var TotalPerson=(prompt("enter total person"))
 var perPerson =( TotalBill/TotalPerson)
 alert("Total Bill is: " + TotalBill + " and per person is: " + perPerson)

// calculator

var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
var operator = prompt("Enter operator (+, -, *, /)");

if (operator === "+") {
    var result = num1 + num2;
    alert("The result is: " + result);
} else if (operator === "-") {
    var result = num1 - num2;
    alert("The result is: " + result);
} else if (operator === "*") {
    var result = num1 * num2;
    alert("The result is: " + result);
} else if (operator === "/") {
    var result = num1 / num2;
    alert("The result is: " + result);
} else {
    alert("Invalid operator");
} 

// movie tiket 

var age=Number(prompt("Enter your age"));
var stuudent=prompt("Are you a student? (y/n)");
var code=Number(prompt("Enter your code"));
if (age <=12)
{
    alert("Your ticketis free");
}
    if (stuudent==="y")
    {
        alert("You discount is 20%");
    }
    else if (stuudent==="n")
    {
        alert("You are not eligible for a student discount");
    }
    if (code==12345 ){
        alert("You are eligible for vip pass"    );
    }
    else if (code!=12345){
        alert("You are not eligible for vip pass");
    }