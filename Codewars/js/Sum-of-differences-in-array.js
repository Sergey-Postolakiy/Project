/*Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([1, 2, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell). */

function sumOfDifferences(arr) {
   if (arr.length == 1)
      return 0
   arr.sort((a, b) => a - b)
   return arr[arr.length - 1] - arr[0]
}

// const sumOfDifferences = arr =>
//    arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);//если длинна массива <1, возвращаем 0, иначе возвращаем макс - мин

/*
const sumOfDifferences = arr =>
  [...arr]
    .sort((a, b) => b - a)
    .reduce(
      (total, number, index, array) =>
        index + 1 < array.length ? total + number - array[index + 1] : total,
      0
    )
*/

console.log(sumOfDifferences([26, -9, -20, -7, 26, -22, -21, -18, 17, -10, 23, 18, -16, -8, 13, -26, 14, -13, -23]));