let firstName = prompt("What is your Name?");
let partnerName = prompt("What is your Partner Name?");

let loveCalculation = Math.random() * 100;
loveCalculation = Math.floor(loveCalculation) + 1;

alert(
  firstName +
    " and " +
    partnerName +
    "'s Love Percentage is: " +
    loveCalculation +
    "%"
);
