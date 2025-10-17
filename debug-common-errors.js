Program A



console.log("Welcome to the bootcamp
/*What’s Wrong?
Error Type: Syntax Error
Explanation: The string is not properly closed with a quotation mark.
Proposed Fix:
Add a closing quotation mark at the end of the string.*/




console.log("Welcome to the bootcamp");
/*Verification:
After correcting the syntax, run the code again. The output will be:

Welcome to the bootcamp
Program B*/



let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
/*What’s Wrong?
Error Type: Runtime Error
Explanation: The array contains a string ("eight"), which cannot be multiplied by a number, causing a NaN (Not-a-Number) result for that iteration.
Proposed Fix:
Filter out non-numeric values from the array before performing the multiplication.*/




let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'number') { // Check if the element is a number
    let doubled = numbers[i] * 2;
    console.log(doubled);
  }
}
/*Verification:
After correcting the code, run it again. The output will be:*/

4
8
//Program C



function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false
/*What’s Wrong?
Error Type: Logic Error
Explanation: The function incorrectly returns true when the number is not prime. It should return false in that case.
Proposed Fix:
Change the return value inside the if statement to indicate that the number is not prime.*/



function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Corrected to indicate num is NOT prime
    }
  }
  return true; // Corrected to indicate num IS prime
}

console.log(isPrime(7)); // Now correctly returns true
/*Verification:
After correcting the logic, run it again. The output will be:*/

true
/*Reflection on Debugging Methods
Reading Error Messages: This is crucial for identifying syntax and runtime errors. Error messages often provide specific line numbers and descriptions that help pinpoint the issue.

Using console.log(): Adding log statements can help track the flow of the program and the values of variables at different stages, which is especially useful for logic errors.

Testing in Small Steps: Breaking down the code into smaller parts and testing each section can help isolate problems and ensure each part functions as intended.

Understanding Data Types: Being aware of 's dynamic typing and how it affects operations (like multiplication) can prevent runtime errors.

Logical Flow: Reviewing the logic of the code carefully to ensure it aligns with the intended functionality is key to identifying logic errors.*/
