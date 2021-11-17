

//: jQuery - Подключение библиотеки ://
const jQuery = require('~/app/libs/jquery3.5.1/dist/jquery.min');

//: Slider Siema - Подключение библиотеки ://
const Siema = require('~/app/libs/siema-master/dist/siema.min');



/* Событие "DOMContentLoaded" (js)
    код начнет работу когда весь HTML был полностью загружен и пройден парсером */
document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  //*___ jQuery ___ 👇 *//
  // window.jQuery = window.$ = jQuery;

  //*___ ПЛАВНЫЙ ПЕРЕХОД (jQuery) ___*/
    /* по якорю, где <a class="scrollto"> */
  jQuery('a.scrollto').click(function () {
    var elementClick = '#'+jQuery(this).attr('href').split('#')[1];
    var destination = jQuery(elementClick).offset().top;

    jQuery('html:not(:animated),body:not(:animated)').animate({
      scrollTop: destination
    }, 800);
    return false;
  });



  //*___ Menu (jQuery) ___*/
  /* Добавляет и убирает по клику на иконку меню, класс menu__open */
  jQuery('.menu__icon').click(function () {
    /* проверка наличие указанного имени класса 'menu__open' у элемента jQuery('.menu')*/
    if( !jQuery('.menu').hasClass('menu__open') ) {
      jQuery('html,body').css('overflow','hidden');
    } else {
      jQuery('html,body').css('overflow','visible');
    }
    jQuery(this).closest('.menu').toggleClass('menu__open'); /* открыть меню */
    // jQuery(this).closest('.menu').toggleClass('menu__close'); /* закрыть меню */

    /* Убирает по клику на ссылку в меню класс  - menu__open*/
    jQuery('.menu__link').click(function () {
      if( jQuery('.menu').hasClass('menu__open') ) {
        jQuery('html,body').css('overflow','visible');
      }
      jQuery('.menu').removeClass('menu__open');
    });
  });




  //*___ Slider (js) ___ 👇 *//

  /* sliderClassOnPage - класс слайдера/карусели */
  const sliderClassOnPage = document.querySelector('.siema__carousel--list');

  /* ? класс карусели есть на странице ? */
  if ( null !== sliderClassOnPage ) {
    function printSlideIndex() {
      // document.querySelector('.js-index').innerHTML = this.currentSlide+1
    }

    var mySiema = new Siema({
      selector: sliderClassOnPage, /* класс к которому примениться слайдер */
      duration: 500, /* Продолжительность слайд-перехода в миллисекундах */
      // perPage: 3, /* Количество отображаемых слайдов */
      perPage: { /* адаптивность добавляем */
        0: 1, /* для области просмотра c 0 до 800рх */
        800: 2, /* 2 для области просмотра c 800рх до 1183px */
        1183: 3 /* 3 для области просмотра c 1183px до ∞px */
      },
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 40,
      loop: true,
    });
    // setInterval(() => mySiema.next(), 2000); /* авто переключение через N количество милисекунд */

    /* Кнопки слайдера 👇 */
    document.querySelector('.slider__menu--prev').addEventListener('click', function() {
      mySiema.prev(); /* 👈 */
    });
    document.querySelector('.slider__menu--next').addEventListener('click', function() {
      mySiema.next(); /* 👉 */
    });
  }

});