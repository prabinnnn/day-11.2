function gcd(a, b) {
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example usage: Calculate and print the GCD of 2154 and 458.
console.log(gcd(2154, 458));
