/*
Write a
function that always returns 5

Sounds easy right ? Just bear in mind that you can 't use any of the following characters: 0123456789*+-/

Good luck: )

*/

function howMuchILoveYou(nbPetals) {
   let loveOrNot = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
   return loveOrNot[(nbPetals - 1) % loveOrNot.length]
}

console.log(howMuchILoveYou(12));