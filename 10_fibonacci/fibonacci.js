const fibonacci = function (n) {
  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i] + fib[i - 1]);
    return fib[n];
  }
  console.log(fib[i]);
};

fibonacci(4);
// Do not edit below this line
/*module.exports = fibonacci;*/
