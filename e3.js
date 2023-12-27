function greatestdivisor(a, b) {
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  console.log("not valid");
}

console.log(greatestdivisor(48, 16));
