let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let isPalindrome = false;
let seperated = string.split("");
let reverse = [];
console.log(seperated);
for (let i = (string.length - 1); i >= 0; i--)
{
    //console.log(seperated[i])
    reverse.push(seperated[i]);
    //console.log(reverse);
}

let reversedString = (reverse.join(""));
console.log(reversedString);

if (reversedString === string)
{
    isPalindrome = !isPalindrome;
}
else
{
    console.log("Is Not a Palindrome");
}

console.log(isPalindrome);

