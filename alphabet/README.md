# Alphabet (project) :open_file_folder:


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
        —:point_up_2:—
      </td>
    </tr>
    <!-- site 👇 -->
  </tbody>
</table><br>



I used and made:
  - ### HTML
      - Errors output between: ```<div id="table__error--wrap"></div>``` function ```errorMessageOutput()```
      - The table is built between: ```<div id="table__wrap"></div>```
      - The table is built with tags: ```<table>, <div>, <tr>, <th>, <td>``` (it is better not to build tables through div, as this will cause a number of difficulties and requires CSS crutches , verified)
  - ### JS
      - Execution starts after the HTML is fully loaded (when the DOM tree is built), all code is in ```document.addEventListener('DOMContentLoaded'...){}```
      - The object ```ObjectAlphabet``` with arrays that contain alphabets is at the beginning file
      - Counting the longest alphabetic array of letters in the object, variable: ```maxLength__Array```
      - 2 global variables:
          - ```maxLength__Array``` (a variable that stores the length of the array, with the largest number of letters from the alphabets)
          - ```idTable``` (the div with id="" which was already written in index.html)
      - ```appendChild()``` - method that creates ```<table>, <tr>, <div>```
      - ```createCol(idCol, nameCol__th, arrayLetters)``` - A function to create a column for the alphabet, to which you need to pass 3 parameters:
          - ```idCol``` (unique id - for new alphabet column);
          - ```nameCol__th``` (text - for Alphabet column name)
          - ```ObjectAlphabet.<NameArray>``` OR ```null``` (Array of letters or null, if instead of an array set to null, a line number column will be created using the variable ```maxLength__Array```)
      - Created ```if else``` checks, with error output
      - ```errorMessageOutput()``` - Error output function to which we can pass error text, depending on the check
      - Errors were found for ```IE11``` as the browser does not have support for:
          - ``
          - ```append()``` method (fixed a bug by replacing it with an older ```appendChild()``` method)
          - Default parameters for functions ```(idCol='', nameCol__th='', arrayLetters=[])```
  - ### CSS
      - First letter always capitalized - for class ```.big``` with: ```text-transform: capitalize```
      - Letters are always lowercase - for class ```.small``` with: ```text-transform: lowercase```
      - Errors are styled according to the ```.error-alert``` class, a block with this class is created by the ```errorMessageOutput(textError)``` function