/*1. Есть массив объектов одинаковой структуры.
Сама структура объекта неизвестна (типы полей, их уровень вложения).
Поля в объекте могут быть другими сложными объектами, типом Date, string, number, boolean.
//исходный массив inputArrayData (ниже)

2. Так же есть объект такой же структуры, но с типами полей boolean.
Используется для задания правил преобразований(если значение поля true -
   то поле должно быть в результирующем массиве).
массив configArrayData (ниже)

3. Также есть объект с типами полей string, в которых хранятся локализованные заголовки полей.
Названия полей, в которых хранятся локализованные заголовки, соответствуют пути к полю в объекте,
в котором хранится его значение.
//массив localizationConfig (ниже)

4. Необходимо написать код, который на основе вышеописанных объектов создаст массив объектов
следующей структуры:
   [{
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
      name: "other",
      value1: "1",
      value2: "2"
   }]

5. Если поле типа boolean - то выводить его значение в виде Да / Нет, дату выводить в формате dd.MM.yyyy

6. Если для поля отсутствует локализация, то вместо локализации необходимо вывести название этого поля*/

// решение
const produceOutput = (data, dataCfg, l10nCfg, dataItemKey) => {
   if (!data.length) return [];
   const l10nKeysRE = new RegExp(dataItemKey + '\.(.+)$', 'i');
   const l10n = Object.keys(l10nCfg).reduce(
      (r, k) => ((r[k.match(l10nKeysRE)[1]] = l10nCfg[k]), r), {});
   const l10nBool = ['Ні', 'Так'];
   const result = Object.keys(data[0][dataItemKey])
      .filter(k => dataCfg[dataItemKey][k])
      .reduce((r, k) => ((r[k] = {
         name: l10n[k] || k
      }), r), {});
   data.forEach(({
      [dataItemKey]: itmData
   }, i) => {
      Object.keys(itmData).forEach(k => {
         if (!result[k]) return;
         let value = itmData[k];
         if (typeof itmData[k] === 'boolean')
            value = l10nBool[+itmData[k]];
         result[k]['value' + (i + 1)] = value;
      });
   });
   return Object.keys(result).map(k => result[k]);
};

// данные
let inputArrayData = [{
   fullName: {
      surname: 'xxx',
      firstName: 'yyy',
      middleName: 'zzz',
      isHuman: true,
      Date: 'Mar 12 2012',
      other: 1
   }
}, {
   fullName: {
      surname: 'XXX',
      firstName: 'YYY',
      middleName: 'ZZZ',
      isHuman: false,
      Date: 'Mar 8 2012',
      other: 2
   }
}];

let configArrayData = {
   fullName: {
      surname: true,
      firstName: true,
      middleName: false,
      isHuman: true,
      Date: true,
      other: true
   }
};

let localizationConfig = {
   "fullName.surname": "Прізвище",
   "fullName.firstName": "Ім'я",
   "fullName.middleName": "По-батькові",
   "fullName.isHuman": "Чи людина?",
   "fullName.Date": "Дата",
   "fullName.other": ""
};

// тест
const output = produceOutput(
   inputArrayData,
   configArrayData,
   localizationConfig,
   'fullName'
);
console.log(JSON.stringify(output, null, 2));