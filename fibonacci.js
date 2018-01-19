// Two different Fibonacci functions
  // Basic Fibonacci function
  // Memoization Fibonnaci function

function fibonacci(ind) {
  if (ind < 3) return 1;
  else {
    return fibonacci(ind - 1) + fibonacci(ind - 2);
  }
}

function fibonacciMemoization(ind, cache) {
  // ind: index of number in fibonacci sequence
  // cache: an array used as memory
  cache = cache || [];
  if (cache[ind]) return cache[ind];
  else {
    if (ind < 3) return 1;
    else {
      cache[ind] = fibonacciMemoization(ind - 1, cache) + fibonacciMemoization(ind - 2, cache);
    }
  }  
  return cache[ind];
}