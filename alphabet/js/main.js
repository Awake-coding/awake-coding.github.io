'use strict';

//___ Object ___
/* Объект с масcивами алфавитов */
const ObjectAlphabet = {
  enBigArr: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ],
  enSmallArr: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  ruBigArr: [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
  ],
  ruSmallArr: [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
  ],
  ruToEnBigArr: [
    'A', 'B', 'V', 'G', 'D', 'E', 'Yo(E)', 'Zh', 'Z', 'I', 'Y(i)', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'Kh', 'Ts', 'Ch', 'Sh', 'Shch', '\'\'', 'Y', '\'', 'E', 'Yu(iu)', 'Ya(ia)'
  ],
  ruToEnSmallArr: []
};

//___ Variables global ___
let maxLength__Array = 0; // Переменная для подсчета максимальной длинны массива
let idTable = 'table';    // id для create <table>

/* Самый длинный массив букв */
for (let key in ObjectAlphabet) { // В key весь масcив одного из свойства обьекта
  if ( maxLength__Array < ObjectAlphabet[key].length ) {
    maxLength__Array = ObjectAlphabet[key].length;
  }
}

/* Длинна масcивов */
const length__enBigArr   = ObjectAlphabet.enBigArr.length;   // (26)
const length__enSmallArr = ObjectAlphabet.enSmallArr.length; // (26)
const length__ruBigArr   = ObjectAlphabet.ruBigArr.length;   // (33)
const length__ruSmallArr = ObjectAlphabet.ruSmallArr.length; // (33)
//* ____________________________________________________________________



//___ Main function ___
window.onload = function Main() {
  /* Create <table></table> */
  if ( document.getElementById('inner__table') !== null ) {
    document.getElementById('inner__table').innerHTML = `<table class="${idTable}" id="${idTable}"></table>`;
  } else
    /* ERROR 1 */ return errorMessageOutput('<center>Error (№1)</center> <br/>Не существует в index.html -- div c id="inner__table"');

  /* Проверка длинны масcива больших букв с маленькими */
  if ( length__ruBigArr == length__ruSmallArr &&
       length__enBigArr == length__enSmallArr
  ) {
    /* Create Cols */
    createCol('colNumber', '№', null, null);
    createCol('colEn', 'En', ObjectAlphabet.enBigArr, ObjectAlphabet.enSmallArr);
    createCol('colRu', 'Ru', ObjectAlphabet.ruBigArr, ObjectAlphabet.ruSmallArr);
    createCol('colRuToEn', 'Ru > En', ObjectAlphabet.ruToEnBigArr, ObjectAlphabet.ruToEnSmallArr);
    /* Error test */
    // createCol('231', 'Ru > En1', ObjectAlphabet.ruToEnBigArr, null); // Error 3
    // createCol('231', 'Ru > En1', null, ObjectAlphabet.ruToEnBigArr); // Error 3
    // createCol(9, 6, ObjectAlphabet.ruToEnBigArr, ObjectAlphabet.ruToEnBigArr); // Error 4
  } else {
    /* ERROR 2 */
    const massage = `
      <center>Error (№2)</center>
      <br/><strong>For create table - size arrays differ.
      <br/>Check please arrays: ("RU" !== "ru") or ("EN" !== "en").</strong>
    `;
    errorMessageOutput(massage);
  }
};
//* ____________________________________________________________________



//___Functions___👇
/*
  👇 Parameters - createCol()
  ** idCol            - ('' - string, уникальное id - для столбца нового алфавита)
  ** nameCol_HTML     - (text - для название столбца Алфавита)
  ** arrayLetterBig   - (Массив больших букв или null, если вместо 2-х массивов задать null, то создастся столбик нумерации строк)
  ** arrayLetterSmall - (Массив маленьких букв или null, если вместо 2-х массивов задать null, то создастся столбик нумерации строк)
*/
function createCol( idCol='', nameCol_HTML='', arrayLetterBig=[], arrayLetterSmall=[] )
{
  if ( arrayLetterBig == null && arrayLetterSmall !== null ||
       arrayLetterBig !== null && arrayLetterSmall == null
  ) {
    /* ERROR 3 */
    const massage = `
      <center>Error (№3)</center>
      <br/> В функцию createCol()
      <br/> ---- можно передать только такие парметры:
      <br/>( \'String\', \'String\', null, null ) -- создастся столбик нумерации строк
      <br/> ---- или такие:
      <br/>( \'String\', \'String\', [ 'A', 'B'... ], [ 'a', 'b'... ] ) -- создастся столбик с алфавитом
    `;
    return errorMessageOutput(massage);
  }

  if ( idCol.constructor === String && nameCol_HTML.constructor === String &&
       arrayLetterBig === null && arrayLetterSmall === null ||
       idCol.constructor === String && nameCol_HTML.constructor === String &&
       arrayLetterBig.constructor === Array && arrayLetterSmall.constructor === Array
  ) {
    let col;                 // Столбец
    let nameCol;             // Имя столбца
    let cell;                // Ячейка
    let letterBig;           // Большая буква с маcсива
    let letterSmall;         // Маленькая буква с масcива

    //// create column
    col = document.createElement('div');
    col.className = 'col';
    col.id = idCol;
    document.getElementById(idTable).append(col);

    //// create name column
    nameCol = document.createElement('tr');
    nameCol.className = 'nameCol';
    nameCol.innerHTML = '<th class="name" colspan=2>' + nameCol_HTML + '</th>';
    document.getElementById(idCol).append(nameCol);

    if ( arrayLetterBig === null && arrayLetterSmall === null ) {
      //// create cell number
      for (let i = 0; i < maxLength__Array; i++) {
        cell = document.createElement('tr');
        cell.className = 'number';
        cell.innerHTML = '<td>' + (i + 1) + '</td>'; // Начало с 1
        document.getElementById(idCol).append(cell);
      }
    } else {
      //// create cell letters
      for (let i = 0; i < maxLength__Array; i++) {
        letterBig = arrayLetterBig[i];
        letterSmall = arrayLetterSmall[i];

        if ( letterBig == undefined && letterSmall == undefined ) {
          letterBig = '<div class="empty__letter"></div>';
          letterSmall = '<div class="empty__letter"></div>';
        } else if ( letterBig == undefined || letterSmall == undefined ) {
          if ( letterBig == undefined) {
            letterBig = '<div class="empty__letter"></div>';
          } else letterSmall = '<div class="empty__letter"></div>';
        } else {
          letterSmall = '( '+ letterSmall + ' )';
        }

        cell = document.createElement('tr');
        cell.className = 'letters';
        cell.innerHTML = '<td><div class="big">' + letterBig + '</div>' +
                         '<div class="small">'   + letterSmall + '</div></td>';
        document.getElementById(idCol).append(cell);
      }
    }
  } else {
    /* ERROR 4*/
    const massage = `
      <center>Error (№4)</center>
      <br/> В функцию createCol()
      <br/> ---- можно передать только такие парметры:
      <br/>( \'String\', \'String\', null, null ) -- создастся столбик нумерации строк
      <br/> ---- или такие:
      <br/>( \'String\', \'String\', [ 'A', 'B'... ], [ 'a', 'b'... ] ) -- создастся столбик с алфавитом
    `;
    errorMessageOutput(massage);
  }
}

/* Error Message function */
function errorMessageOutput(textError='') {
  let arrAlertClassElements = document.getElementsByClassName('alert');

    if (arrAlertClassElements[0] == undefined) {
      let errorMessage; // Переменная для вывода ошибки вместо таблицы

      errorMessage = document.createElement('div');
      errorMessage.className = 'alert';
      errorMessage.innerHTML = textError;

      document.getElementById('alert__block').append(errorMessage);
    }
}
//* ____________________________________________________________________