/* main js file*/
$(function() {

	
});

/* MENU для телефонов */
(function($){
	/* Добавляет и убирает по клику на иконку меню 
	класс  - menu__open*/
	// $(function() {
	// 	$('.menu__icon').on('click', function() {
	// 		$(this).closest('.menu').toggleClass('menu__open');
	// 	});
	// });

	/* Добавляет и убирает по клику на иконку меню 
		класс menu__open */
	$('.menu__icon').click(function () {
		/* проверка наличие указанного имени класса "menu__open" у элемента $('.menu')*/
		if(!$('.menu').hasClass('menu__open'))
			$("html,body").css("overflow","hidden");
		else
			$("html,body").css("overflow","visible ");
		$(this).closest('.menu').toggleClass('menu__open');// открыть меню
		// $(this).closest('.menu').toggleClass('menu__close');// закрыть меню

		/* Убирает по клику на ссылку в меню 
	 класс  - menu__open*/
		$('.menu__links-item').click(function(){
			if($('.menu').hasClass('menu__open'))
				$("html,body").css("overflow","visible ");
			$(".menu").removeClass('menu__open');
		});
	}); 
})(jQuery);



/* ПЛАВНЫЙ ПЕРЕХОД ПО НАЖАНИЮ ССЫЛКИ а С КЛАССОМ scrollto */
$(document).ready(function() {
		$("a.scrollto").click(function () {
				var elementClick = '#'+$(this).attr("href").split("#")[1]
				var destination = $(elementClick).offset().top;
				jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
				return false;
		});
});