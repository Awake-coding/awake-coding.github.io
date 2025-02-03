# Alphabet (проект) :open_file_folder:


Русский | [English](README.md)
<hr>



<!-- table site Preview -->
<table align="">
  <thead>
    <tr>
      <th align="center">
        Preview
      </th>
      <th align="center">
        Name project
      </th>
      <th align="center">
        Type
      </th>
    </tr>
  </thead>
  <tbody>
    <!-- site 👇 -->
    <tr>
      <!-- td 🔳 -->
      <td align="center" colspan="1" rowspan="2">
        <a href="https://awake-coding.github.io/alphabet/" rel="nofollow">
          <img src="../image/alphabet-preview.jpg" title="Go to the site" alt="alphabet-preview" style="width: 70px;">
        </a>
      </td>
      <!-- td 🔳 -->
      <td rowspan="2">
        <a href="https://awake-coding.github.io/alphabet/" rel="nofollow">
          Alphabet
        </a>
      </td>
      <!-- td 🔳 -->
      <td align="center">JS</td>
    </tr>
    <!-- 🔴 row 2 -->
    <tr>
      <td align="center">
        <!-- 2 sections -->
        — :point_up_2: —
      </td>
    </tr>
    <!-- site 👇 -->
  </tbody>
</table><br>



Использовано / Сделано:
  - ### HTML
      - Ошибки выводятся между:    ```<div id="table__error--wrap"></div>```, это делает функция ```errorMessageOutput()```
      - Таблица строиться между:   ```<div id="table__wrap"></div>```
      - Таблица строиться с тегов: ```<table>, <div>, <tr>, <th>, <td>```
  - ### JS
      - Выполнение начинается после полной загрузки HTML (когда построено DOM-дерево), весь код находиться в ```document.addEventListener('DOMContentLoaded'...){}```
      - Прописан вначале объект ```ObjectAlphabet``` с массивами, что содержат алфавиты
      - Подсчет самого длинного алфавитного массива букв в объекте, переменная ```maxLength__Array```
      - 2 глобальные переменные:
          - ```maxLength__Array``` (переменная что хранит длину массива, с самым большим количеством букв из алфавитов)
          - ```idTable``` (div с id="", который уже был написан в index.html).
      - ```appendChild()``` - метод который создает ```<table>, <tr>, <div>...```
      - ```createCol(idCol, nameCol__th, arrayLetters)``` - Функция создания столбца для алфавита, в которую нужно передавать 3 параметра:
          - ```idCol``` (уникальное id - для столбца нового алфавита);
          - ```nameCol__th``` (text - для название столбца Алфавита)
          - ```ObjectAlphabet.<NameArray>``` OR ```null``` (Когда вместо массива указан ```null```, будет создан столбец нумерации букв, с использованием переменной ```maxLength__Array ```)
      - Созданы проверки ```if else```, с выводом ошибок
      - ```errorMessageOutput()``` - Функция вывода ошибок, в которую мы можем передавать текст ошибки, в зависимости от проверки
      - Для ```IE11``` были найдены ошибки, так как браузер не имеет поддержки:
          - ``
          - Метод ```append()``` (Можно устранить ошибку, если использовать старый метод ```appendChild()```)
          - Параметры по умолчанию у функций ```(idCol='', nameCol__th='', arrayLetters=[])```
  - ### SASS (CSS)
      - Первая буква всегда заглавная - для класса ```.big``` с помощью: ```text-transform: capitalize```
      - Буквы всегда строчные - для класса ```.small``` с помощью:       ```text-transform: lowercase```
      - Ошибки имеют стили CSS согласно классу ```.error-alert```, блок с этим классом создается функцией ```errorMessageOutput(textError)```