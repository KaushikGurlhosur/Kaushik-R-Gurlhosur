function generateOddSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example usage:
let a = 4;
console.log(generateOddSeries(a).join(", "));
