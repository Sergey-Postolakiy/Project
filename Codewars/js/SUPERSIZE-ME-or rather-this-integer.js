/*
noobCode 01:SUPERSIZE ME....or rather, this integer!
Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321

superSize(105) // 510
superSize(12) // 21

If the argument passed through is single digit or is already the maximum possible integer, your
function should simply return it.
*/

// function superSize(num) {
//    if (num < 10) {
//       return num;
//    } else {
//       let r = String(num).split("").sort().reverse().join("");
//       return Number(r);
//    }
// }

// преобразуем строку в массив, сортируем, переворачиваем, преобразуем обратно в строку
function superSize(n) {
   return parseInt(n.toString().split('').sort().reverse().join('')) // parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления
}

console.log(superSize(203197426));