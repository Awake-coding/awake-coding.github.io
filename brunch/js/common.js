
/* main js file*/
$(function() {

});

/* MENU для телефонов */
(function($){
	/* Добавляет и убирает по клику на иконку меню, класс menu__open */
	$('.menu__icon').click(function () {
		/* проверка наличие указанного имени класса "menu__open" у элемента $('.menu')*/
		if(!$('.menu').hasClass('menu__open'))
			$("html,body").css("overflow","hidden");
		else
			$("html,body").css("overflow","visible");
		$(this).closest('.menu').toggleClass('menu__open');// открыть меню
		// $(this).closest('.menu').toggleClass('menu__close');// закрыть меню

		/* Убирает по клику на ссылку в меню класс  - menu__open*/
		$('.menu__links-item').click(function(){
			if($('.menu').hasClass('menu__open'))
				$("html,body").css("overflow","visible");
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


function printSlideIndex() {
	// document.querySelector('.js-index').innerHTML = this.currentSlide+1
}
var mySiema10 = new Siema({
	selector: '.siema__carousel', //класс к какому применим слайдер
	duration: 500, //Продолжительность слайд-перехода в миллисекундах
	// perPage: 3, //Количество отображаемых слайдов
	perPage: { //адаптивный вариант
		0: 1, // для области просмотра c 0 до 800рх
		800: 2, // 2 для области просмотра c 800рх до 1183px
		1183: 3 // 3 для области просмотра c 1183px до Npx
	},
	startIndex: 0,
	draggable: true,
	multipleDrag: true,
	threshold: 40,
	loop: true, 
});
// setInterval(() => mySiema10.next(), 2000) // авто переключение через N количество милисекунд
var prev2 = document.querySelector('.tenth__prev');
var next2 = document.querySelector('.tenth__next');
prev2.addEventListener('click', function() { 
	mySiema10.prev();
});
next2.addEventListener('click', function() { 
	mySiema10.next();
});