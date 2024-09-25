// using iteration to create fibanacci function

function fibonacci(num) {
  let x = 0; // represent the first term
  let y = 1; // represent the second term
  let z; // representing the sum of x and y

  let i = 0;
  for (i = 2; i < num; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  return y;
}

//fibonacci using recursion

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
