
document.addEventListener('DOMContentLoaded', function Main() {
  'use strict';

  //: Object with arrays Alphabets :
  const ObjectAlphabet = {
    enArr: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ],
    uaArr: [ 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я' ],
    ruArr: [ 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я' ],
    ruToEnArr: [ 'A', 'B', 'V', 'G', 'D', 'E', 'Yo/E', 'Zh', 'Z', 'I', 'Y/I', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'Kh', 'Ts', 'Ch', 'Sh', 'Shch', '\'\'', 'Y', '\'', 'E', 'Yu/Iu', 'Ya/Ia' ]
  };

  //: Variables global :
  let maxLength__Array  = 0;        // Переменная для подсчета максимальной длинны массива
  let idTable           = 'table';  // id для create <table>

  /*
  ? Подсчет максимальной длинны надо переделать,
  ? когда в массиве будет алфавит длиннее чем те что выведены в таблице,
  ? то не создавать пустых ячеек для выведенных уже алфавитов */
  /* Самый длинный массив букв */
  for (let key in ObjectAlphabet) { // В key весь массив одного из свойства объекта
    if (maxLength__Array < ObjectAlphabet[key].length) {
      maxLength__Array = ObjectAlphabet[key].length;
    }
  }


  /* В .html создан блок с id='table__wrap' ? */
  if (document.getElementById('table__wrap') !== null) {
    /* 🛠 create <table> (если создан) */
    let table           = document.createElement('table');
        table.id        = idTable;
    document.getElementById('table__wrap').append(table);
  } else {
    /* ERROR 1 (если не создан) */ const massage = `
        <center>Error (№1)</center><br/>
        В .html файле НЕ создан блок с id='table__wrap' или написан с ошибкой
    `;
    return errorMessageOutput(massage);
  }




  //*___ main actions ___*/
  /* creating columns with the given parameters */
  /*         Class        Name        Alphabet  */
  createCol('colNumber',  '№',        null);
  createCol('colEn',      'En',       ObjectAlphabet.enArr);
  createCol('colUa',      'Ua',       ObjectAlphabet.uaArr);
  createCol('colRu',      'Ru',       ObjectAlphabet.ruArr);
  createCol('colRuToEn',  'Ru > En',  ObjectAlphabet.ruToEnArr);









  //: ___ Functions ___👇*/

  //*: createCol :*/
  /*
    👇 Parameters - createCol()
    ** idCol            - ('' - string, уникальное id - для столбца нового алфавита)
    ** nameCol__th      - (text - для название столбца Алфавита)
    ** arrayLetters     - (Массив букв или null, если вместо массива задать null, то создастся столбик нумерации строк)
  */
  function createCol(idCol='', nameCol__th='', arrayLetters=[])
  {
    /* Массив пустой? */
    if (arrayLetters !== null && arrayLetters.length === 0) {
      /* ERROR 2 */ const massage = `
          <center>Error (№2)</center><br/>
          В функцию createCol() вы передали пустой массив для столбика "${nameCol__th}". <br/><br/>
          — Пожалуйста укажите правильное имя массива алфавита в объекте ObjectAlphabet <br/><br/>
          или <br/><br/>
          — Добавьте буквы алфавита к массиву с указанным именем
      `;
      errorMessageOutput(massage);
    }

    if (idCol.constructor         === String &&
        nameCol__th.constructor   === String &&
        arrayLetters              === null
        ||
        idCol.constructor         === String &&
        nameCol__th.constructor   === String &&
        arrayLetters.constructor  === Array)
    {
      /* 🛠 create column (Столбец div) 👈 */
      let col__div            = document.createElement('div');
          col__div.className  = 'col';
          col__div.id         = idCol;
      document.getElementById(idTable).append(col__div);

      /* 🛠 create name column (Имя столбца) 👈 */
      let colName__th           = document.createElement('tr');
          colName__th.className = 'nameCol';
          colName__th.innerHTML = '<th class="name" colspan=2>' + nameCol__th + '</th>';
      document.getElementById(idCol).append(colName__th);

      if (arrayLetters === null) {
        /* 🛠 create cell number (Ячейка number) 👈 */
        for (let i = 0; i < maxLength__Array; i++) {
          let cell__td            = document.createElement('tr');
              cell__td.className  = 'number';
              cell__td.innerHTML  = '<td>' + (i + 1) + '</td>'; // Начало с 1
          document.getElementById(idCol).append(cell__td);
        }
      } else {
        /* 🛠 create cell letters (Ячейка letters)👈 */
        for (let i = 0; i < maxLength__Array; i++) {
          let letterBig   = arrayLetters[i];
          let letterSmall = arrayLetters[i];

          /* Массив алфавита содержит, на данной итерации, букву? */
          if (letterBig == undefined && letterSmall == undefined) {
                letterBig   = '<div class="empty__letter"></div>';
                letterSmall = '<div class="empty__letter"></div>';
          } else {
                letterSmall = /* '( '+  */letterSmall/*  + ' )' */;
          }

          let cell__td            = document.createElement('tr');
              cell__td.className  = 'letters';
              cell__td.innerHTML  = '<td><div class="big">' + letterBig    + '</div>' +
                                      '<div class="small">'   + letterSmall  + '</div></td>';
          document.getElementById(idCol).append(cell__td);
        }
      }
    } else {
      /* ERROR 3*/ const massage = `
          <center>Error (№3)</center><br/>
          В функцию createCol() можно передать только такие параметры: <br/><br/><ul><li>
          ( \'String\', \'String\', null ) - создастся столбик нумерации строк;</li></ul><br/>
          OR<br/><br/><ul><li>
          ( \'String\', \'String\', ObjectAlphabet.&lt;nameArray&gt; ) - создастся столбик с алфавитом.</li></ul>
      `;
      return errorMessageOutput(massage);
    }
  }



  //*: errorMessageOutput :*/
  function errorMessageOutput(textError = '') {
    let arrAlertClassElements = document.getElementsByClassName('error-alert');

      /* Отображать только 1 ошибку */
      if (arrAlertClassElements[0] == undefined) {
        let errorMessage;
            errorMessage           = document.createElement('div');
            errorMessage.className = 'error-alert';
            errorMessage.innerHTML = textError; // Передаем текст ошибки с параметра
        document.getElementById('table__error--wrap').append(errorMessage);
      }
  }

});