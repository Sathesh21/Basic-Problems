// program to check if the string is palindrome or not

// take input
const string = "hsoh";

// call the function
const value = checkPalindrome(string);

function checkPalindrome(str) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
console.log(value);






// function Palindrome(n) {
//     var rem, temp, final = 0;
//     var number = Number(n);

//     temp = number;
//     console.log(temp)
//     while (number > 0) {
//         rem = number % 10;
//         console.log("Remainder-->", rem)
//         number = parseInt(number / 10);
//         console.log("Number--->", number)
//         final = final * 10 + rem;
//         console.log("Final-->", final)
//     }
//     if (final == temp) {
//         console.log("The inputed number is Palindrome");
//     } else {
//         console.log("The inputted number is not palindrome");
//     }
// }
// Palindrome(515)
