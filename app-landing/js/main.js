
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


  //*___ prices buttons 'active' ___*/

  /* Масив prices кнопок */
  const pricesButtons = Array.prototype.slice.call(document.querySelectorAll('.prices__buttons .button'));

  /* 👇Работает, если массив имеет хоть 1 элемент */
  if ( pricesButtons[0] !== undefined &&
       pricesButtons.length !== 0
  ) {
    /* Перебор масива кнопок */
    pricesButtons.forEach(function (button) {
      /* Нажата копка из масива? */
      button.addEventListener('click', function (Event) {
        /* Убрать дефолт поведение у button */
        Event.preventDefault();

        /* Перебор масива кнопок (Убрать класс 'active')*/
        pricesButtons.forEach(function (button) {
          /* Содержит класс 'active'? */
          if ( button.classList.contains('active') ) {
            /* Убрать класс 'active' */
            button.classList.remove('active');
          }
        });

        /* Добавить класс 'active' к нажатой кнопке */
        button.classList.add('active');

        /* Cодержит кнопка с 'active' текст 'Annually'? */
        if ( button.innerHTML.indexOf('Annually') > 0 ) {
          /* Тогда зменить текст '.price' на '$70' */
          document.querySelectorAll('.prices__item--price .price')[1].innerHTML = '$70'
        } else {
          /* Вернуть старое значение */
          document.querySelectorAll('.prices__item--price .price')[1].innerHTML = '$99'
        }

      });
    });
  }



  //*___ FAQ accordion 'active' ___*/

  /* Масив questions блоков */
  const questionsFAQ = Array.prototype.slice.call(document.querySelectorAll('.faq__list .faq__item'));

  /* 👇Работает, если NodeList[] имеет хоть 1 item */
  if ( questionsFAQ[0] !== undefined &&
       questionsFAQ.length !== 0
  ) {
    /* Перебор масива questionsFAQ */
    questionsFAQ.forEach(function (question) {
      /* Нажато по question из масива? */
      question.addEventListener('click', function (Event) {
        /* Убрать дефолт поведение у question */
        Event.preventDefault();

        /* Перебор масива кнопок (Убрать класс 'active')*/
        questionsFAQ.forEach(function (question) {
          /* Содержит класс 'active'? */
          if ( question.classList.contains('active') ) {
            /* Убрать класс 'active' */
            question.classList.remove('active');
          }
        });

        /* Добавить класс 'active' к нажатой кнопке */
        question.classList.add('active');

      });
    });
  }

});