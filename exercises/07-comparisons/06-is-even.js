let num = 8; // e.g.

/**
 * Create a variable called "isEven". (Do not use var.)
 * If "num" is even, "isEven" should be true.
 * Otherwise, "isEven" should be false.
 * Your answer should still work when "num" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let isEven = true;

if ((num % 2) == 0)
{
    console.log(isEven);
}
else
{
    isEven = !isEven;
    console.log(isEven);
}