var x = 17;
if (x == 1) {
  console.log(`The given number "${x}" is either prime or cosicutive number`);
} else if (x > 1) {
  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      var y = true;
    }
  }

  if (y) {
    console.log(`The given number "${x}" is not prime number`);
  } else{
    console.log(`The given number "${x}" is  a prime number`);
  }

}

