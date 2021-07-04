'use strict'; // Включает строгую проверку объявлена ли переменная (https://learn.javascript.ru/strict-mode)

//___Variables___👇
/* Масивы алфавитов */
const enBigArr = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const enSmallArr = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const ruBigArr = [
      'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
];
const ruSmallArr = [
      'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
];
const ruToEnBigArr = [
      'A', 'B', 'V', 'G', 'D', 'E', 'Yo(E)', 'Zh', 'Z', 'I', 'Y(i)', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'Kh', 'Ts', 'Ch', 'Sh', 'Shch', '\'\'', 'Y', '\'', 'E', 'Yu(iu)', 'Ya(ia)'
];
const ruToEnSmallArr = [];

/* Длинна масивов */
const length__enBigArr       = enBigArr.length;       // (26)
const length__enSmallArr     = enSmallArr.length;     // (26)
const length__ruBigArr       = ruBigArr.length;       // (33)
const length__ruSmallArr     = ruSmallArr.length;     // (33)
const length__ruToEnBigArr   = ruToEnBigArr.length;   // (33)
const length__ruToEnSmallArr = ruToEnSmallArr.length; // (33)

/* Самый длинный массив */
const lengthMax__arr = Math.max(
  length__enBigArr,
  length__enSmallArr,
  length__ruBigArr,
  length__ruSmallArr,
  length__ruToEnBigArr,
  length__ruToEnSmallArr
);

/* Переменные для создания стобцов и ячеек с буквами */
const classCol = 'col';  // class - для столбца
let idCol;               // id - столбца функции
let nameCol_HTML;        // text - для первой ячкейки столбца
let col;                 // Столбец
let nameCol;             // Имя столбца
let cell;                // Ячейка
let letterBig;           // Большая буква с масива
let letterSmall;         // Маленькая буква с масива
let errorMessage;        // Переменная для вывода ошибки вместо таблицы
//* ____________________________________________________________________



//___ Main function ___
window.onload = function Main() {
  /* Проверка длинны массива больших букв с маленькими */
  if ( length__ruBigArr == length__ruSmallArr && length__enBigArr == length__enSmallArr )
  {
    /* Create */
    createNumCol();     //* Number Column
    createEnCol();      //* En     Column
    createRuCol();      //* Ru     Column
    createRuToEnCol();  //* RuToEn Column
  } else {
    /* ERROR */
    errorMessage = document.createElement('div');
    errorMessage.className = 'alert';
    errorMessage.innerHTML = '<strong>For create table - size arrays differ. <br/> Check please arrays: ("RU" !== "ru") or ("EN" !== "en").</strong>';
    document.getElementById('alert__block').append(errorMessage);
  }
};
//* ____________________________________________________________________


//___ Functions ___
/* Create number Column -------------------------*/
function createNumCol() {
  idCol = 'colNumber'; //// id столбика
  nameCol_HTML = '№';  //// имя столбика

  //// create column
  col = document.createElement('div');
  col.className = classCol;
  col.id = idCol;
  document.getElementById('table').appendChild(col);

  //// create name column
  nameCol = document.createElement('div');
  nameCol.className = 'nameCol';
  nameCol.innerHTML = nameCol_HTML;
  document.getElementById(idCol).appendChild(nameCol);

  //// create cell number
  for (let i = 0; i < lengthMax__arr; i++) {
    cell = document.createElement('div');
    cell.className = 'number';
    cell.innerHTML = i + 1; // Начало с 1
    document.getElementById(idCol).appendChild(cell);
  }
}

/* Create En Column -----------------------------*/
function createEnCol() {
  idCol = 'colEn';     //// id столбика
  nameCol_HTML = 'En'; //// имя столбика

  //// create column
  col = document.createElement('div');
  col.className = classCol;
  col.id = idCol;
  document.getElementById('table').appendChild(col);

  //// create name column
  nameCol = document.createElement('div');
  nameCol.className = 'nameCol';
  nameCol.innerHTML = nameCol_HTML;
  document.getElementById(idCol).appendChild(nameCol);

  //// create cell letters
  for (let i = 0; i < lengthMax__arr; i++) {
    letterBig = enBigArr[i];
    letterSmall = enSmallArr[i];

    if ( letterBig == undefined && letterSmall == undefined ) {
      letterBig = '<div class="empty__letter">0</div>';
      letterSmall = '<div class="empty__letter">0</div>';
    } else if ( letterBig == undefined || letterSmall == undefined ) {
      if ( letterBig == undefined ) {
        letterBig = '<div class="empty__letter">0</div>';
      } else letterSmall = '<div class="empty__letter">0</div>';
    } else {
      letterSmall = '( ' + letterSmall + ' )';
    }

    cell = document.createElement('div');
    cell.className = 'letters';
    cell.innerHTML = '<div class="big">'   + letterBig + '</div>' +
                     '<div class="small">' + letterSmall + '</div>';
    document.getElementById(idCol).appendChild(cell);
  }
}

/* Create Ru Column -----------------------------*/
function createRuCol() {
  idCol = 'colRu';     //// id столбика
  nameCol_HTML = 'Ru'; //// имя столбика

  //// create column
  col = document.createElement('div');
  col.className = classCol;
  col.id = idCol;
  document.getElementById('table').appendChild(col);

  //// create name column
  nameCol = document.createElement('div');
  nameCol.className = 'nameCol';
  nameCol.innerHTML = nameCol_HTML;
  document.getElementById(idCol).appendChild(nameCol);

  //// create cell letters
  for (let i = 0; i < lengthMax__arr; i++) {
    letterBig = ruBigArr[i];
    letterSmall = ruSmallArr[i];

    if ( letterBig == undefined && letterSmall == undefined ) {
      letterBig = '<div class="empty__letter">0</div>';
      letterSmall = '<div class="empty__letter">0</div>';
    } else if ( letterBig == undefined || letterSmall == undefined ) {
      if ( letterBig == undefined ) {
        letterBig = '<div class="empty__letter">0</div>';
      } else letterSmall = '<div class="empty__letter">0</div>';
    } else {
      letterSmall = '( ' + letterSmall + ' )';
    }

    cell = document.createElement('div');
    cell.className = 'letters';
    cell.innerHTML = '<div class="big">'   + letterBig + '</div>' +
                     '<div class="small">' + letterSmall + '</div>';
    document.getElementById(idCol).appendChild(cell);
  }
}

/* Create RuToEn Column -------------------------*/
function createRuToEnCol() {
  idCol = 'colRuToEn';       //// id столбика
  nameCol_HTML = 'Ru > En';  //// имя столбика

  //// create column
  col = document.createElement('div');
  col.className = classCol;
  col.id = idCol;
  document.getElementById('table').appendChild(col);

  //// create name column
  nameCol = document.createElement('div');
  nameCol.className = 'nameCol';
  nameCol.innerHTML = nameCol_HTML;
  document.getElementById(idCol).appendChild(nameCol);

  //// create cell letters
  for (let i = 0; i < lengthMax__arr; i++) {
    letterBig = ruToEnBigArr[i];
    letterSmall = ruToEnSmallArr[i];

    if ( letterBig == undefined && letterSmall == undefined ) {
      letterBig = '<div class="empty__letter">0</div>';
      letterSmall = '<div class="empty__letter">0</div>';
    } else if ( letterBig == undefined || letterSmall == undefined ) {
      if ( letterBig == undefined ) {
        letterBig = '<div class="empty__letter">0</div>';
      } else letterSmall = '<div class="empty__letter">0</div>';
    } else {
      letterSmall = '( ' + letterSmall + ' )';
    }

    cell = document.createElement('div');
    cell.className = 'letters';
    cell.innerHTML = '<div class="big">'   + letterBig + '</div>' +
                     '<div class="small">' + letterSmall + '</div>';
    document.getElementById(idCol).appendChild(cell);
  }
}
//* ____________________________________________________________________