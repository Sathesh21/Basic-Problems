sumIsOddOrEven(4, 3);

function sumIsOddOrEven(a, b) {
  var sum = a + b;

  if (sum % 2 == 0) {
    console.log(`sum of (${a},${b}) is even and the sum is `, sum);
  } else {
    console.log(`sum of (${a},${b}) is odd and the sum is ${sum}`)
  }
}