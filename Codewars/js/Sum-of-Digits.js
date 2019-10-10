/*
Sum of Digits / Digital Root
A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here 's how it works:

digital_root(16) => 1 + 6 => 7
digital_root(942) => 9 + 4 + 2 => 15...  => 1 + 5 => 6
*/

function digital_root(n) {
   let z = n.toString();
   let i;
   let y = 0;

   if (z.length === 1) {
      return +z;
   }
   for (i = 0; i < z.length; i++) {
      y += +z[i];
   }
   return digital_root(y);
}

// function digital_root(n) {
//    return (n - 1) % 9 + 1;
// }

// function digital_root(n) {
//    let digits = n.toString().split("").map(Number);
//    let sum = 0;
//    for (let i = 0; i < digits.length; i++) {
//       sum += digits[i];
//    }
//    let sumString = sum.toString();
//    if (sumString.length > 1) {
//       let sumDigits = sumString.split("").map(Number);
//       let firstSumDigit = sumDigits.slice(0);
//       let lastSumDigit = sumDigits.slice(-1);
//       return firstSumDigit[0] + lastSumDigit[0];
//    } else {
//       return sum;
//    }
// }

console.log(digital_root(758)); // 2
console.log(digital_root(84427)); // 7
console.log(digital_root(427));
console.log(digital_root(8447));

function great() {
   return 'hello world!';
}

console.log(great());