/* Create Phone Number
Write a
function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

// join() объединяет все элементы массива (или массивоподобного объекта) в строку
// substring(indexA[, indexB]) извлекает символы, начиная с indexA до, но не включая, indexB
function createPhoneNumber(numbers) {
   numbers = numbers.join('');
   return '(' + numbers.substring(0, 3) + ') ' +
      numbers.substring(3, 6) +
      '-' +
      numbers.substring(6);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))