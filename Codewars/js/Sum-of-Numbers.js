//найти сумму чисел между a, b включительно, если они равны - вывести одно из них
function GetSum(a, b) {
   let total = 0;
   if (a === b) {
      return a
   } else if (a < b) { //если a < b
      for (let i = a; i <= b; i++) { //приравниваем i к a и пока оно не будет равно b
         total += i; //начиная с первоначального a прибавляем за каждый проход a+1
      }
      return total;
   } else if (a > b) {
      for (let i = b; i <= a; i++) {
         total += i;
      }
      return total;
   }
}

console.log(2, 45);