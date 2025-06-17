let oddNumbers = [1.121, 3.2323, 5.123, 7.5352, 9.523];

oddNumbers.forEach((number) => {
  console.log(number.toFixed(2));
});

const testStr: string[] = oddNumbers.map((number) => number.toFixed(3));
console.log(testStr);
