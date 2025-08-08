function generateOddSeriesSpecial(a) {
  let count = a % 2 === 0 ? a - 1 : a;
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example usage:
let a = 6;
console.log(generateOddSeriesSpecial(a).join(", "));
