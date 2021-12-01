//: jQuery - Подключение библиотеки ://
const jQuery = require('~/app/libs/jquery3.5.1/dist/jquery.min');
// window.jQuery = window.$ = jQuery;


document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //*___ jQuery ___ 👇 *//

  //___AJAX (jQuery)___
  // Код с AJAX запросом, связан с файлом "send-message-telegram.php"
  jQuery('.form__order').submit(function (event) {
    event.preventDefault();
    // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
    let form = jQuery('#' + jQuery(this).attr('id'))[0];
    // Сохраняем в переменную класс с параграфом для вывода сообщений
    let message = jQuery(this).find('.form__order--massage');
    let formDataObject = new FormData(form);
    jQuery.ajax(
    {
      url: 'php/send-message-telegram.php',
      type: 'POST',
      data: formDataObject,
      processData: false,
      contentType: false,
      success: function success(res) {
        let respond = jQuery.parseJSON(res);

        if (respond.err) {           /* ошибка 1 */
          message.html(respond.err).css('color', '#d42121');
          setTimeout(() => {
            message.text('');
          }, 4000);
        } else if (respond.okSend) { /* всё хорошо */
          message.html(respond.okSend).css('color', '#21d46c');
          setTimeout(() => {
            message.text('');
          }, 3500);
        } else {                     /* ошибка 2 */
          alert('Необработанная ошибка. Проверьте консоль и устраните.');
        }
      },
    });
  });


  //*___ ПЛАВНЫЙ ПЕРЕХОД (jQuery) ___*/
      /* по якорю, где <a class="scrollto"> */
  jQuery('a.scrollto').click(function () {
      var elementClick = '#'+jQuery(this).attr('href').split('#')[1]
      var destination = jQuery(elementClick).offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 800);
      return false;
  });

});