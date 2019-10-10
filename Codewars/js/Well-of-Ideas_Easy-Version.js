//нужно проверить предоставленный массив (x) для хороших идей «good» и плохих идей «bad». Если есть одна или две хорошие идеи, верните «Publish!», Если их больше двух, верните «I smell a series!». Если хороших идей нет, как это часто бывает, верните «Fail!».
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

// function well(x) {
//    const good_count = x.filter(x => x == 'good').length;
//    return good_count < 1 ? 'Fail!' :
//       good_count < 3 ? 'Publish!' : 'I smell a series!';
// }

// function well(x) {
//    let goodCount = 0; //инициируем переменную где будет храниться кол-во найденых 'good'
//    for (let i = 0; i < x.length; i++) {
//       if (x[i] === 'good') {
//          goodCount++;
//       }
//    }
//    if (goodCount === 0) {
//       return 'Fail!';
//    } else if (goodCount <= 2) {
//       return 'Publish!';
//    } else if (goodCount >= 3) {
//       return 'I smell a series!';
//    }
// }