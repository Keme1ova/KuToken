var lastScrollTop = 0;
var header = document.querySelector('.header');

window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

   if (currentScroll <= 0) {
       // Верх страницы
       header.style.position = 'absolute';
       header.style.backgroundColor = 'transparent'; // Сделать шапку прозрачной
       header.style.zIndex = "1";
   } else if (currentScroll > lastScrollTop){
       // Прокрутка вниз
       header.style.position = 'absolute';
       header.style.backgroundColor = 'transparent'; // Вернуть исходный цвет фона
   } else {
       // Прокрутка вверх
       header.style.position = 'fixed';
       header.style.top = '0';
       header.style.width = '100%';
       header.style.backgroundColor = '#0A0A0A';
       header.style.zIndex = "1000";
   }

   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Обновить lastScrollTop к текущему положению скролла
}, false);
