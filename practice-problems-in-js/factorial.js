// Factorial of n Numbers
let n = 100;

for (let i = 1; i <= n; i++) {
  let f = 1;

  for (j = 1; j <= i; j++) {
    f = f * j;
  }
  console.log(`factorial of "${i}" is "${f}"`);
}
