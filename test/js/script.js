//что выведет
console.log(typeof null); //object это ошибка язка JS

//что выведет консоль? если один из операндов string то происходит конкатенация
console.log('1' + 2); //12
console.log(1 + 2 + '2'); //32

//развернуть одномерный массив без создания дополнительного массива
const arr = [1, 2, -3, 4];

for (let i = arr.length - 1; i >= 0; i--) {
   arr.push(arr[i]);
}

arr.splice(0, arr.length / 2);

console.log(arr); //[4, -3, 2, 1]

//что выдаст результат сравнения
let a = {
   name: 'John',
}
let b = {
   name: 'John'
}
// переменные a и b содержат ССЫЛКУ на объект и занимают разные области памяти, по этому не могут быть равны
console.log(a == b); //folse
console.log(a === b); //folse

let c = {
   name: 'John'
}
let d = c;
// переменной d присвоена таже ссылка, что содержит переменная c, по этому они равны
console.log(c == d); //true
console.log(c === d); //true

//вывести на экран числа находящмеся под главной диагональю матрицы
let matrix = [
   [1, 8, 3, 9],
   [1, 2, 6, 4],
   [7, 5, 3, 8],
   [9, 2, 7, 4],
];

for (let i = 1; i < matrix.length; i++) { // i = 1 т.к. [1, 8, 3, 9] нам не нужен
   for (let j = 0; j < i; j++) {
      console.log(matrix[i][j]); //1 7 5 9 2 7
   }
}

matrix.forEach(function (row, outerIndex) { //row это каждый из внутренних массивов, outerIndex - его индекс
   row.forEach(function (num, innerIndex) { //num это каждый элемент внутреннего массива, innerIndex - его индекс
      if (innerIndex < outerIndex) {
         console.log(num);
      } else {
         return;
      }
   });
});

//что выведет консоль?
let s = 'Hello';

const F = a => {
   a = 'Ura-a-a-h';
};

F(s); //переменная s не изменится т.к. находится снаружи функции. т.к. стоки - примитивный тип данных а не ссылочный, тут происходит передача по значению а не по ссылке, то переменная s не изменится
console.log(s); //Hello
// const F = function (a) { //та же функция вида ES5
//    return a = 'Ura-a-a-h';
// };

const f = {
   s: 'Hello'
};
const G = obj => {
   obj.s = 'Ura-a-a-h' //меняется не сам объект f а его свойство s
};

G(f);
console.log(f.s) //Ura-a-a-h

const nums = [3, 17, -10, 0, 9];

let max = nums[0]; //утверждаем, что максимум первый элемент массива (к примеру)
for (let i = 1; i < nums.length; i++) {
   // if (nums[i] > max) { //если текущее i больше условного max
   //    max = nums[i]; //то max становится текущим i, если нет - остается самим собой
   // }

   max = nums[i] > max ? nums[i] : max; //делаем проверку, если nums[i] > max - то переменной max присваиваем значение nums[i], если нет - переменная max остается без изменений
}
console.log(max);

//что выведет консоль?  //3 3 3
for (var i = 0; i < 3; i++) {
   setTimeout(function () {
      console.log(i);
   }, 0);
}
//как это исправить?
//1) поменять var на let
//2) передать в setTimeout() третьим параметром i и принять её в function (i), вот так:
// for (var i = 0; i < 3; i++) {
//    setTimeout(function (i) {
//       console.log(i); //0 1 2
//    }, 0, i);
// }
//обернуть setTimeout() в самовызывающуюся функцию
for (i = 0; i < 3; i++) {
   (function (i) {
      setTimeout(function () {
         console.log(i);
      }, 0)
   })(i);
};

//есть список строк, найти полиндром
const strings = ['abc', 'lol', 'ggosh', 'abcdcba'];

strings.forEach(function (string) { //к массиву вызываем forEach() с колбек ф которая на каждом проходе принимает один элемент массива
   let reversed = ''; //создаем переменную которая будет хранить развернутую строку

   for (let i = string.length - 1; i >= 0; i--) { //цикл стартует с конца элемента массива
      reversed += string[i]; //и собирает каждый элемент в обратном порядке в переменную reversed
   }
   if (reversed === string) { //если reversed === string
      console.log(`${string} is palindrom`); //выводим в консоль
   }
});

//Напишите рекурсивную функцию на примере поиска чисел Фибоначчи. На вход функция получает порядковый номер числа, а возвращает само число
function fib(index) {
   if (index <= 2) {
      return 1;
   }
   return fib(index - 1) + fib(index - 2) //рекурсия - вызов функции внутри себя
}
console.log(fib(15)); //610

/*
//функция которая складывает 2 числа
function sum(x, y) {
   return x + y;
}

function sum1() {
   let result = 0; //задаем переменную которая будет содержать результат
   let elements = Array.from(arguments); //создаем переменную которая будет содержать массив складывааемых чисел
   for (let i = elements.length - 1; i >= 0; i--) { //цикл проходит от конца массива
      result += elements[i]; //и будет складывать все элементы массива
   }
   return result;
}
//.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта

//очистка от мусора без остановки процесса,
/*function clean(elements) {
   return elements.filter((el) => !isNaN(Number(el)))
}

function sum2() {
   return clean(Array.from(arguments)).reduce((a, curr) => Number(a) + Number(curr), 0)
} */

/*
//верификация данных с остановкой процесса
function verify(elements) {
   elements.forEach((el) => {
      if (isNaN(Number(el))) throw new Error("Not a number")
   })
   return elements;
}

function sum3() {
   return verify(Array.from(arguments)).reduce((a, curr) => Number(a) + Number(curr), 0)
}
//Specs
console.log(sum(1, 1));
console.log(sum1());
console.log(sum1(1));
console.log(sum1(1, 1));
/*console.log(sum2(0));
console.log(sum2(1));
console.log(sum2(1, 1));

//Gigo
console.log(sum2('1', '1')); //2
console.log(sum2('ast', '1')); //clean, 1
console.log(sum2([], {}, '1', 1)); //2
console.log(sum2([1], {}, '1', 1)); //3 */

// console.log(sum3('1', '1')); //2
// console.log(sum3('ast', '1')); //остановка процесса
// console.log(sum3([], {}, '1', 1));
// console.log(sum3([1], {}, '1', 1));

//развернуть массив и строки в нём
let arr9 = ['1234', '6789'];
let revArr = [];

function rev(arr) {
   for (let i = arr.length - 1; i >= 0; i--) {
      let revString = ''; //инициализировать переменную (перевернутую строку) нужно внутри for, т.к. если она будет инициализирована снаружи то не будет очищаться после каждого прохода
      let string = arr[i];
      for (let j = string.length - 1; j >= 0; j--) {
         revString += string[j];
         // console.log(revString);
      }
      revArr.push(revString);
      // console.log(revArr);
   }
   return revArr;
}
console.log(rev(arr9)); //[0: "9876" 1: "4321"]

//развернуть строку
let str = 'abcd';

function revers(string) {
   let rev = '';
   for (let i = string.length - 1; i >= 0; i--) {
      rev += string[i];
   }
   return rev;
}
console.log(revers(str)); //dcba передавать надо массив с элементом!
console.log(revers('asdf')); //fdsa

//удалить все пробелы из строки
function noSpace(x) {
   return x.split(' ').join('')
}
console.log(noSpace('Hello world!')) //Helloworld!

//что вернет консоль?
console.log("i'm a lasagna hog".split("").reverse().join("")); //goh angasal a m'i

function getStr() {
   return [].slice.call(arguments, 1).join(arguments[0])
}

console.log(getStr('*', '1', 'b', '1c'))

let hg = 'zxcvbnm'

function y(x) {
   let rrev = '';
   for (let i = x.length - 1; i >= 0; i--) {
      rrev += x[i];
   }
   return rrev;
}
console.log(y(hg)); //mnbvcxz

//найти сумму чисел между a, b включительно, если они равны - вывести одно из них
function GetSum(a, b) {
   let total = 0;
   if (a === b) {
      return a
   } else if (a < b) { //если a < b
      for (let i = a; i <= b; i++) { //приравниваем i к a и пока оно не будет равно b
         total += i; //к первоначальному a прибавляем за каждый проход a+1
      }
      return total;
   } else if (a > b) {
      for (let i = b; i <= a; i++) {
         total += i;
      }
      return total;
   }
}
console.log(GetSum(17, -8));

//нужно проверить предоставленный массив (x) для хороших идей «good» и плохих идей «bad». Если есть одна или две хорошие идеи, верните «Publish!», Если их больше двух, верните «I smell a series!». Если хороших идей нет, как это часто бывает, верните «Fail!».
let x = ['good', 'bad', 'bad', 'good', 'bad', 'good'];

function well(x) {
   let newX = x.filter(function (value) {
      return value == 'good'
   });
   if (newX.length < 1) {
      return 'Fail!';
   } else if (newX.length < 3) {
      return 'Publish!';
   } else {
      return 'I smell a series!';
   }
}

/*function well(x) {
   const good_count = x.filter(x => x == 'good').length;
   return good_count < 1 ? 'Fail!' :
      good_count < 3 ? 'Publish!' : 'I smell a series!';
}*/

/*function well(x) {
   let goodCount = 0;
   for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good') {
         goodCount++;
      }
   }
   if (goodCount === 0) {
      return 'Fail!';
   } else if (goodCount <= 2) {
      return 'Publish!';
   } else if (goodCount >= 3) {
      return 'I smell a series!';
   }
}*/

console.log(well(x));

function howManyDalmatians(number) {

   var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

   var respond = number <= 10 ? dogs[0] :
      number <= 50 ? dogs[1] :
      number === 101 ? dogs[3] :
      dogs[2];
   return respond
}

console.log(howManyDalmatians(101));