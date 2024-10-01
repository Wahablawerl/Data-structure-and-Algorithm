function fibonacci(n) {
  let fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray;
}

console.log(fibonacci(12));
console.log(fibonacci(10));
console.log(fibonacci(15));

//FIBONACCI SEQUENCE USING RECURSIVE

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
