let arr20 = ["take", "over", "the", "world", "maybe", "who", "knows", "bitcoin", "perhaps"];

function twoSort(s) {
   s.sort()
   return s[0].split("").join("***")
}

/*
function twoSort(s) {
   return s.sort()[0].split("").join("***");
}
*/

console.log(twoSort(arr20)); //b***i***t***c***o***i***n