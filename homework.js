'use strict';

fortuneTeller(3, 'Jane', 'San Francisco', 'Uber-driver');

let currentYear = new Date();
ageCalculator(currentYear.getFullYear(), 1996);

let rand = Math.trunc(Math.random() * 100);
tempConverter(rand + ' F');

//FortuneTeller
function fortuneTeller(numOfChild, partnerName, location, job) {
  console.log(
    `You will be a ${job} in ${location}, and married to ${partnerName} with ${numOfChild} kids`
  );
}
//Age Calculator
function ageCalculator(currentYear, birthYear) {
  console.log(`They are ${currentYear - birthYear} years old`);
}

function tempConverter(temp) {
  const [number, type] = temp.split(' ');
  console.log(temp);

  if (type === 'C') {
    console.log(`${number}\u00B0C is ${(Number(number) * 9) / 5 + 32}\u00B0F`);
  } else {
    console.log(
      `${number}\u00B0F is ${Math.trunc(
        ((Number(number) - 32) * 5) / 9
      )}\u00B0C`
    );
  }
}
