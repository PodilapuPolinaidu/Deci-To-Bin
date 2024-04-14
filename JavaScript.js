function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1;
  while (x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
 
  }
  document.write(`The binary of ${num} is: ${bin}`);
}
const num = prompt("Enter a decimal number");
convertToBinary(num);
