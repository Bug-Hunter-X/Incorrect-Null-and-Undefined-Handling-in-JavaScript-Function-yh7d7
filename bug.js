function foo(a, b) {
  if (a === null || b === null) {
    return null; // This is incorrect for handling undefined
  }
  return a + b;
}

console.log(foo(1, undefined)); // Output: NaN
console.log(foo(1, null)); // Output: null