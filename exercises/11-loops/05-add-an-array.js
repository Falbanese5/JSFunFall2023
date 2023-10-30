let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "sum".
 * It should be equal to the sum of all the numbers in an array.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let sum = 0;
let num = 0;

while (num < numbers.length)
{
    sum = (sum + numbers[num]);
    //console.log(sum);
    num++; 
}

console.log(sum);