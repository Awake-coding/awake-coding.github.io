
//: jQuery - Подключение библиотеки ://
const jQuery = require('~/app/libs/jquery3.5.1/dist/jquery.min');
// window.jQuery = window.$ = jQuery;


document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //*___ ПЛАВНЫЙ ПЕРЕХОД (jQuery) ___*/
      /* по якорю, где <a class="scrollto"> */
  jQuery(document).ready(function() {
      jQuery("a.scrollto").click( function() {
          var elementClick = '#' + jQuery(this).attr("href").split("#")[1];
          var destination = jQuery(elementClick).offset().top;
          jQuery("html:not(:animated),body:not(:animated)")
            .animate({ scrollTop: destination }, 800);
          return false;
      });
  });

});