$(document).ready(function(){
   const bxslider = $('.testimonials').bxSlider({
     pager: false,
     mode: 'fade',
     adaptiveHeight: true,
   });

   setTimeout(() => {
     bxslider.goToNextSlide();
   }, 100);

   $('.menu-burger').click(() => {
     if ($('body').hasClass('menu-opened')) {
       $('body').removeClass('menu-opened');
     } else {
       $('body').addClass('menu-opened');
     }
   });
 });