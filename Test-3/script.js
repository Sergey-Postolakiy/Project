/*
1. Имеем массив объектов одинаковой структуры.
Сама структура объекта неизвестна (типы полей, их уровень вложения).
Поля в объекте могут быть другими сложными объектами, типом Date, string, number, boolean.*/
//исходный массив
let arr = [{
   fullName: {
      surname: 'xxx',
      firstName: 'yyy',
      middleName: 'zzz',
      isHuman: true,
      Date: Mar 12 2012,
      other: 1
   }
}, {
   fullName: {
      surname: 'XXX',
      firstName: 'YYY',
      middleName: 'ZZZ',
      isHuman: false,
      Date: Mar 8 2012,
      other:
   }
}];
console.log(arr[0].fullName.isHuman);
/*
2. Так же есть объект такой же структуры, но с типами полей boolean.
Используется для задания правил преобразований (если значение поля true
   - то поле должно быть в результирующем массиве).*/
//массив правил преобразования, если все поля true - элемент попадает в результирующий массив
let bool = {
   fullName: {
      surname: true,
      firstName: true,
      middleName: false,
      isHuman: true,
      Date: true,
   }
}

/*3. Также есть объект с типами полей string, в которых хранятся локализованные заголовки полей.
Названия полей, в которых хранятся локализованные заголовки, соответствуют пути к полю в объекте,
в котором хранится его значение.*/
//массив где хранятся локализации
let loc = {
   "arr[0].fullName.surname": "Прізвище",
   "arr[0].fullName.firstName": "Ім'я",
   "arr[0].fullName.middleName": "По-батькові",
   "arr[0].fullName.isHuman": "Чи людина?",
   "arr[0].fullName.date": "Дата"
}

/*4. Необходимо написать код, который на основе вышеописанных объектов создаст массив объектов
следующей структуры:*/
//результат
let output = [{
   name: "Прізвище",
   value1: "xxx",
   value2: "XXX"
}, {
   name: "Ім'я",
   value1: "yyy",
   value2: "YYY"
}, {
   name: "По-батькові",
   value1: "zzz",
   value2: "ZZZ"
}, {
   name: "Чи людина?",
   value1: "Так",
   value2: "Ні"
}, {
   name: "Дата",
   value1: "12.03.2012",
   value2: "08.03.2012"
}]

/*5. Если поле типа boolean - то выводить его значение в виде Да / Нет, дату выводить в формате dd.MM.yyyy

6. Если для поля отсутствовует локализация, то вместо локализации необходимо вывести название этого поля.
*/

/*
Вопросы:
1) Правильно ли я понял задание, в часности массивы для примера?
2) Из п .2 следует, что в результирующий массив попадают только те элементы, у которых все поля имеют
значение true, т.е. заполнены, так? Если так, то ему противоречит п.6
Проясните плз.
3) В каком формате будет в исходном массиве значение ключа Дата?
*/