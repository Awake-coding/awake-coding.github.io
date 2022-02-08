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
      - Указан запрет на индексацию поисковиками (```<meta name="robots" content="noindex, nofollow">```)
      - favicon:
          - Сначала сделан favicon_180х180.png
          - Уменьшен и сделан favicon_32x32.png
      - Links:
          - Каждой ссылке что ведет на другой сайт добавлено: ```target="_blank"``` и ```rel="noopener"```
          - Каждая такая ссылка более безопасно откроет сайт в новой вкладке
          - Каждой ссылке где вместо текста картинка или иконка, добавлено ```aria-label=""``` (создаёт текстовую метку текущего элемента, документация: [Ссылки должны иметь различимый текст](https://dequeuniversity.com/rules/axe/3.3/link-name))
  - ### SASS (CSS)
      - Адаптивность для любого разрешения экрана
      - Flexbox - основа управления макетом проекта
      - Gulp производит компиляцию SASS to CSS, с слежением "sourcemaps" (что добавляет простоты отладки для SASS)
      - Файл "[_config.sass](sass/_config.sass)" содержит:
          - [VARs](sass/_config.sass#L49) in SASS (font, color)
          - [```@font-face``` mixin](sass/_config.sass#L6-L20)
          - [```@media``` mixin](sass/_config.sass#L24-L45)
              1. указывая ширину min и max через: ```@include media($min-w: null, $max-w: null)```
              2. Вместо ```null``` подставлять значения в ```px``` или ```em```
          - CSS default:
              1. Reset CSS для: ```*, ul, li, ol, a```
              2. Default CSS для: ```body, header, section, input, textarea, ::placeholder, ::selection, b, strong, address, .h1, .h2, .h3, .h4, .h5```
              3. CSS для classes: ```.container```, ```.button```
      - Файл "[libs.sass](sass/libs.sass)" содержит:
          - [Подключенные CSS библиотеки](sass/libs.sass#L1):
              1. animate.css (анимация для [.header__center--content](index.html#L100))
              2. font-awesome.css
          - [Подключен в HTML](index.html#L23) как отдельный файл "libs.min.css"
      - Файл "[main.sass](sass/main.sass)" содержит:
          - Подключил "_config.sass" написав ```@import "_config"```, тогда VS-Code будет подсказывать переменные подключенного файла SASS
          - ```@media``` под необходимыми классами в "main.sass", используя возможность синтаксиса SASS
  - ### JS
      - Основной js файл: "[main.js](js/main.js)"
      - Сборка js происходит с помощью Webpack, который используется в gulp
      - Webpack компиляция в ES5 с помощью ```@babel/preset-env```
      - Sourcemaps в gulp добавляет простоты отладки JS
      - Код начнет выполнение, когда весь HTML был полностью загружен "DOMContentLoaded"
      - Библиотеки подключаются в самом "[main.js](js/main.js)", через ```const nameVAR = require('~/app/')```:
          1. jQuery (для плавного перехода по якорю)
              ```const jQuery = require('~/app/libs/jquery3.5.1/dist/jquery.min')```;
      - Кнопки ["Monthly"(месяц) и "Annually"(год)](https://awake-coding.github.io/app-landing/#prices) имеют функционал: (js)
          - Активная кнопка только 1 (js добавляет и убирает класс "active" по клику)
          - Проверка: если кнопка "Annually" содержит класс "active", тогда цена показана меньше
          - То есть как только активная кнопка "Annually"(год), это приводит к смене цены на более низкую, так как оплата за "Annually"(год) всегда меньше
          - Кнопка изначальной активности, по пути: ```section.prices > div.prices__buttons > a.button.active```
      - Accordion [для FAQ функционал](https://awake-coding.github.io/app-landing/#faq): (js)
          - Активный accordion только 1 (js добавляет и убирает класс "active" по клику на неактивный item)
          - item accordion изначальной активности, по пути: ```section.faq > ul.faq__list > li.faq__item.active```
      - **Ошибки / Решения**: (js)
          1. Что бы работал jQuery плавный переход, убрал в SASS у: ```html { scroll-behavior: smooth; }```
          2. SCRIPT438: Объект не поддерживает свойство или метод ```forEach```
              Решение:
              - Иногда удобнее работать с содержимым NodeList, используя методы Array
              - Конвертирование NodeList в Array с помощью: ```Array.prototype.slice.call(document.querySelectorAll('div'))```
              - Теперь метод ```forEach``` прекрасно работает
  - ### Icons
      - ```Font Awesome```
      - ```Google fonts icons``` (downloaded svg)
  - ### [Fonts/](fonts)
      - Шрифты с расширениями .woff, .woff2, .svg:
          1. fontawesome-webfont (для работы libs/ font-awesome.css)
          2. ```Poppins-Regular(400)```, ```Poppins-Medium(500)```, ```Poppins-SemiBold(600)```, ```Poppins-Bold(700)```
  - ### [Img/](img)
      - src/  - оригиналы с макета
      - dist/ - оптимизированные изображения с помощью gulp
      - Всем тегам ```<img>``` указаны атрибуты: ```width``` и ```height```
          - Немного ускоряет загрузку страницы, поскольку браузеру нет нужды вычислять размер каждого рисунка после его получения
          - Документация: [Оптимизация совокупного смещения макета](https://web.dev/optimize-cls/#izobrazheniya-bez-razmerov)
      - svg
          1. Скачаны некоторые svg icons с google fonts в папку img/
          2. Цвет svg корректировал в самом файле ".svg" которые в src/ (так же эти svg файлы я отформатировал, сделав их с отступами для читабельности)
          3. gulp оптимизировал и убрал лишнее в ".svg" (отступы и ```<rect>```)
          4. Способы подключения svg, которые использовал:
              - в HTML
                  - после оптимизации SVG, брал с папки dist/ код оптимизированного SVG и вставлял в нужные места в HTML
                  - таким образом можно управлять через CSS цветом
                  - При таком подключении следует закрыть ```<path>``` не самозакрывающимся вариантом ```<path ... />```, а явно ```<path></path>```
                      (Следует это делать тогда, когда необходима 100% поддержка IE 11, как минимум убрать ошибку "HTML1500")
              - в CSS
                  - через ```background-image: url("../img/dist/*.svg")```
                  - но цветом нельзя управлять через CSS для svg иконки
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