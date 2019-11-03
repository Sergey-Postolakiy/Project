/*
1. Имеем массив объектов одинаковой структуры.
Сама структура объекта неизвестна (типы полей, их уровень вложения).
Поля в объекте могут быть другими сложными объектами, типом Date, string, number, boolean.*/
//исходный массив
let inputArrayData = [{
   fullName: {
      surname: 'xxx',
      firstName: 'yyy',
      middleName: 'zzz',
      isHuman: true,
      Date: "03 12 2012",
      other: "1"
   }
}, {
   fullName: {
      surname: 'XXX',
      firstName: 'YYY',
      middleName: 'ZZZ',
      isHuman: false,
      Date: "03 8 2012",
      other: ""
   }
}];
console.log(inputArrayData[0].fullName.isHuman);
/*
2. Так же есть объект такой же структуры, но с типами полей boolean.
Используется для задания правил преобразований (если значение поля true
   - то поле должно быть в результирующем массиве).*/
//массив правил преобразования, если все поля true - элемент попадает в результирующий массив
let configArrayData = {
   fullName: {
      surname: true,
      firstName: true,
      middleName: true,
      isHuman: false,
      Date: true,
      other: true
   }
}

/*3. Также есть объект с типами полей string, в которых хранятся локализованные заголовки полей.
Названия полей, в которых хранятся локализованные заголовки, соответствуют пути к полю в объекте,
в котором хранится его значение.*/
//массив где хранятся локализации
let localizationConfig = {
   "fullName.surname": "Прізвище",
   "fullName.firstName": "Ім'я",
   "fullName.middleName": "По-батькові",
   "fullName.isHuman": "Чи людина?",
   "fullName.Date": "Дата",
   "fullName.other": "Інше"
}

/*4. Необходимо написать код, который на основе вышеописанных объектов создаст массив объектов
следующей структуры:*/
//результат
let outputArray = [{
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
}, {
   name: "Інше",
   value1: "1",
   value2: "other"
}]

/*5. Если поле типа boolean - то выводить его значение в виде Да / Нет, дату выводить в формате dd.MM.yyyy

6. Если для поля отсутствует локализация, то вместо локализации необходимо вывести название этого поля.
*/

/*
Вопросы:
1) В каком формате будет в исходном массиве значение ключа Дата?
*/