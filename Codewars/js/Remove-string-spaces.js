//удалить все пробелы из строки
function noSpace(x) {
   return x.split(' ').join('')
}
console.log(noSpace('Hello world!')) //Helloworld!