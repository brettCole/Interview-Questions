# Two different Fibonacci functions
  # Basic Fibonacci function
  # Memoization Fibonnaci function

def fibonacci(ind)
  if ind < 3 then 1
  else
    fibonacci(ind - 1) + fibonacci(ind - 2)
  end
end

@cache = [0, 1]
def fibonacciMemoization(ind)
  return @cache[ind] if @cache[ind]
  @cache[n] = fibonacciMemoization(ind - 1) + fibonacciMemoization(ind - 2)
end