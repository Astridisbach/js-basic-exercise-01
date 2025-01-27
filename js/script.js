"use strict"; // Aktiverer strict mode for at undgå fejl og sikre god praksis

// Indhent det første tal
let number1 = parseFloat(prompt("Enter the first number:")); // Konverter brugerens input til et tal

// Indhent det andet tal
let number2 = parseFloat(prompt("Enter the second number:")); // Konverter brugerens input til et tal

// Beregn summen af de to tal
let sum = number1 + number2; // Læg de to tal sammen

// Vis resultatet i konsollen
console.log(`The sum of ${number1} and ${number2} is ${sum}.`); // Udskriv summen i konsollen
