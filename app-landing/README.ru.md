# App-landing (проект) :open_file_folder:


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
        <a href="https://awake-coding.github.io/app-landing/" rel="nofollow">
          <img src="../image/app-landing-preview.jpg" title="Go to the site" alt="app-landing-preview" style="width: 70px;">
        </a>
      </td>
      <!-- td 🔳 -->
      <td rowspan="2">
        <a href="https://awake-coding.github.io/app-landing/" rel="nofollow">
          App-landing
        </a>
      </td>
      <!-- td 🔳 -->
      <td align="center">Landing</td>
      <!-- 🔴 row 2 -->
      <tr>
        <td align="center">
          <!-- 12 sections -->
          —:point_up_2:—
        </td>
      </tr>
    </tr>
    <!-- site 👇 -->
  </tbody>
</table><br>



Использовано / Сделано:
  - ### HTML
      - Валидный HTML-код
  - ### SASS - CSS
      - Адаптивность для любого разрешения экрана
      - Flexbox - основа управления макетом проекта
      - Gulp производит компиляцию SASS to CSS, с слежением "sourcemaps" (что добавляет простоты отладки для SASS)
      - Файл "[_config.sass](sass/_config.sass)"
          - [VARs](sass/_config.sass#L49) in SASS (font, color)
          - [```@font-face``` mixin](sass/_config.sass#L6-L20)
          - [```@media``` mixin](sass/_config.sass#L24-L45)
              1. указывая ширину min и max через: ```@include media($min-w: null, $max-w: null)```
              2. Вместо ```null``` подставлять значения в ```px``` или ```em```
          - CSS default:
              1. Reset CSS для: ```*, ul, li, ol, a```
              2. Default CSS для: ```body, header, section, input, textarea, ::placeholder, ::selection, b, strong, address, .h1, .h2, .h3, .h4, .h5```
              3. CSS для classes: ```.container```, ```.button```
      - Файл "[libs.sass](sass/libs.sass)"
          - [CSS библиотеки подключены](sass/libs.sass#L1) в libs.sass,
          - [в HTML подключено](index.html#L23) как отдельный файл "libs.min.css"
      - Файл "[main.sass](sass/main.sass)"
          - Подключил "_config.sass" написав ```@import "_config"```, тогда VS-Code будет подсказывать переменные подключенного файла SASS
          - Всё ```@media``` написаны под нужными классами в "main.sass", используя возможность синтаксиса SASS
  - ### JS
      - Основной js файл: "[main.js](js/main.js)"
      - Сборка js происходит с помощью webpack, который используется в gulp
      - Webpack компиляция в ES5 с помощью ```@babel/preset-env```
      - Sourcemaps в gulp добавляет простоты отладки JS
      - Код начнет выполнение, когда весь HTML был полностью загружен "DOMContentLoaded"
      - Библиотеки подключаются в самом "[main.js](js/main.js)", через ```const nameVAR = require('~/app/')```
      - **Ошибки / Решения**:
          1. Что бы работал jQuery плавный переход, убрал в SASS у: ```html { scroll-behavior: smooth; }```
  - ### [Fonts/](fonts)
      - Используются шрифты с расширениями .woff, .woff2, .svg
  - ### [Img/](img)
      - src/  - оригиналы с макета
      - dist/ - оптимизированные изображения с помощью gulp
  - ### [.htaccess](.htaccess)
      - Конфигурационный файл веб-сервера Apache, для кеширования fonts, images, CSS, JS, HTML




  - ### Кроссбраузерность

<table align="">
  <thead>
    <tr>
      <th>
        <a rel="nofollow" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" style="max-width: 100%;">
        </a>
        <br>
        Chrome
      </th>
      <th>
        <a rel="nofollow" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" style="max-width: 100%;">
        </a>
        <br>
        Firefox
      </th>
      <th>
        <a rel="nofollow" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" style="max-width: 100%;">
        </a>
        <br>
        Safari
      </th>
      <th>
        <a rel="nofollow" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" style="max-width: 100%;">
        </a>
        <br>
        IE/Edge
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>last 25 versions</td>
      <td>last 25 versions</td>
      <td>last 25 versions</td>
      <td>IE11, Edge</td>
    </tr>
  </tbody>
</table>