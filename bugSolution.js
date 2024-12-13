function foo(a, b) {
  if (a == null || b == null) {
    return null; // Correctly handles null and undefined
  }
  return a + b;
}

//Alternative using typeof
function foo2(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    return null;
  }
  return a+b;
}
console.log(foo(1, undefined)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo2(1,undefined)); // Output: null
console.log(foo2(1, null)); // Output: null