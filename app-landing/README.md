# App-landing (project) :open_file_folder:


English | [Русский](README.ru.md)
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



I used and made:
  - ### HTML
      - Valid HTML-code
      - Specified a ban on indexing by search engines (```<meta name="robots" content="noindex, nofollow">```)
      - favicon:
          - First made favicon_180x180.png
          - Reduced and made favicon_32x32.png
      - Links:
          - Added ```target="_blank"``` and ```rel="noopener"``` to each link that leads to another site
          - Each such link will more safely open the site in a new tab
          - Added ```aria-label=""``` to each link where instead of text is an image or icon (creates a text label for the current element, documentation: [Links must have discernible text](https://dequeuniversity.com/rules/axe/3.3/link-name))
  - ### SASS (CSS)
      - Responsive for any screen resolution
      - Flexbox - the basis for project layout management
      - Gulp compiles SASS to CSS by tracking "sourcemaps" (which makes debugging easier for SASS)
      - File "[_config.sass](sass/_config.sass)" contains:
          - [VARs](sass/_config.sass#L49) in SASS (font, color)
          - [```@font-face``` mixin](sass/_config.sass#L6-L20)
          - [```@media``` mixin](sass/_config.sass#L24-L45)
              1. specifying min and max widths via: ```@include media($min-w: null, $max-w: null)```
              2. Instead of "```null```" passed value in ```px``` or ```em```
          - Default CSS:
              1. Reset CSS for: ```*, ul, li, ol, a```
              2. Default CSS for: ```body, header, section, input, textarea, ::placeholder, ::selection, b, strong, address, .h1, .h2, .h3, .h4, .h5```
              3. CSS for classes: ```.container```, ```.button```
      - File "[libs.sass](sass/libs.sass)" contains:
          - [Included CSS libraries](sass/libs.sass#L1):
              1. animate.css (animate for [.header__center--content](index.html#L100))
              2. font-awesome.css
          - [Connected in HTML](index.html#L23) as separate "libs.min.css" file
      - File "[main.sass](sass/main.sass)" contains:
          - included "_config.sass" by writing ```@import "_config"```, then VS-Code will prompt the variables of the included SASS file
          - ```@media``` under required classes in "main.sass" using the SASS syntax opportunity
  - ### JS
      - Main js file: "[main.js](js/main.js)"
      - js is built using Webpack, which is used in gulp
      - Compiling Webpack to ES5 with ```@babel/preset-env```
      - Sourcemaps in gulp produce ease of JS debugging
      - The code will start executing when all the HTML has been completely loaded "DOMContentLoaded"
      - Libraries are included in "[main.js](js/main.js)" itself, via ```const nameVAR = require('~/app/')```:
          1. jQuery (for a smooth anchor transition)
              ```const jQuery = require('~/app/libs/jquery3.5.1/dist/jquery.min')```;
      - Buttons ["Monthly" and "Annually"](https://awake-coding.github.io/app-landing/#prices) have functionality: (js)
          - Active button only 1 (js adds and removes "active" class on click)
          - Check: if the button "Annually" contains the class "active", then the price is shown less
          - That is, as soon as the "Annually" button is active, this leads to a change in the price to a lower one, since the payment for "Annually" is always less
          - Initial activity button, along the path: ```section.prices > div.prices__buttons > a.button.active```
      - Accordion [for FAQ functionality](https://awake-coding.github.io/app-landing/#faq): (js)
          - Active accordion only 1 (js adds and removes "active" class on click on inactive item)
          - item accordion of the initial activity, along the path: ```section.faq > ul.faq__list > li.faq__item.active```
      - **Bugs/Solutions**: (js)
          1. To make the jQuery smooth transition work, I removed the following from SASS: ```html { scroll-behavior: smooth; }```
          2. SCRIPT438: Object does not support ```forEach``` property or method
              Solution:
              - Sometimes it's more convenient to work with NodeList content using Array methods
              - Convert NodeList to Array with: ```Array.prototype.slice.call(document.querySelectorAll('div'))```
              - Now the ```forEach``` method works fine
  - ### Icons
      - ```Font Awesome```
      - ```Google fonts icons``` (downloaded svg)
  - ### [Fonts/](fonts)
      - Fonts with extensions .woff, .woff2, .svg:
          1. fontawesome-webfont (for libs/font-awesome.css to work)
          2. ```Poppins-Regular(400)```, ```Poppins-Medium(500)```, ```Poppins-SemiBold(600)```, ```Poppins-Bold(700)```
  - ### [Img/](img)
      - src/ - originals from the layout
      - dist/ - optimized images with gulp
      - All ```<img>``` tags have the following attributes: ```width``` and ```height```
          - Slightly speeds up page loading because the browser doesn't have to calculate the size of each image after it's received
          - Documentation: [Optimize Cumulative Layout Shift](https://web.dev/i18n/en/optimize-cls/#images-without-dimensions)
      - svg
          1. Downloaded some svg icons from google fonts to img/ folder
          2. The color of the svg was corrected in the ".svg" file itself, which are in src/ (I also formatted these svg files, making them indented for readability)
          3. gulp optimized and removed unnecessary stuff in ".svg" (indentation and ```<rect>```)
          4. Methods for connecting svg that I used:
              - in HTML
                  - after SVG optimization, took the optimized SVG code from the dist/ folder and inserted it in the right places in HTML
                  - this way you can control the color via CSS
                  - With this connection, you should close ```<path>``` not with the self-closing option ```<path ... />```, but explicitly with ```<path></path>```
                      (You should do this when you need 100% support for IE 11, at least remove the "HTML1500" error)
              - in CSS
                  - via ```background-image: url("../img/dist/*.svg")```
                  - but the color cannot be controlled via CSS for such connection of svg icon
  - ### [.htaccess](.htaccess)
      - Apache web server configuration file, for caching fonts, images, CSS, JS, HTML




  - ### Browsers support

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