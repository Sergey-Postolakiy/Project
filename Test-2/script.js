let array = [
   [0, 0, 1, 2, 1, 1],
   [0, 0, 1, 2, 2, 2],
   [0, 1, 1, 2, 2, 2],
   [0, 1, 1, 1, 1, 2],
   [3, 1, 1, 1, 3, 3],
   [3, 3, 1, 1, 2, 1],
   [3, 3, 3, 0, 0, 1]
];


function findCommonGroups(arr, y, x, del, breaksOff) {
   if (arr[y] === undefined || arr[y][x] === undefined) {
      return
   }
   let numb = arr[y][x];
   if (breaksOff === undefined) {
      breaksOff = numb;
   }
   if (numb === breaksOff) {
      arr[y][x] = del;
      let ys = [y + 1, y - 1, y, y],
         xs = [x, x, x - 1, x + 1];
      ys.forEach((v, y) => findCommonGroups(arr, v, xs[y], del, breaksOff));
   }
};

findCommonGroups(array, 3, 2, '..')

let out = [];
for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array[i].length; j++) {
      out += array[i][j];
   }
   out += '<br>';
}

document.querySelector('.out').innerHTML = out;