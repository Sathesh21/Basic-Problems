// function validatePalin(string) {
//     // get the total length of the words

//     const len = string.length;
//     let isPalindrom = true;

//     // Use for loop to divide the words into 2 half

//     for (let i = 0; i < len / 2; i++) {
//         console.log(len / 2)
//             // validate the first and last characters are same
//         console.log(i, string[i], "-----", (len - 1 - i), string[len - 1 - i])
//         if (string[i] !== string[len - 1 - i]) {
//             isPalindrom = false;
//         }
//     }

//     return isPalindrom;
// }

// const result = validatePalin("5235");

// if (result) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

function Palindrome(n) {
    var rem, temp, final = 0;
    var number = Number(n);

    temp = number;
    console.log(temp)
    while (number > 0) {
        rem = number % 10;
        console.log("Remainder-->", rem)
        number = parseInt(number / 10);
        console.log("Number--->", number)
        final = final * 10 + rem;
        console.log("Final-->", final)
    }
    if (final == temp) {
        console.log("The inputed number is Palindrome");
    } else {
        console.log("The inputted number is not palindrome");
    }
}
Palindrome(515)