/**************
   Theme Name: Adil-Responsive personal one page template
   Author: Themesdesign
   File: Main JS file
***************/

(function($){
  'use strict';
  //navbar scroll
  $(document).ready(function(){
    var scrollLink = $(".scroll");
     scrollLink.click(function(e){
       e.preventDefault();
       $('body,html').animate({
         scrollTop: $(this.hash).offset().top
       },1000);
     });
     //active scrollLink
     $(window).scroll(function(){
       var scrollbarLocation = $(this).scrollTop();
       scrollLink.each(function(){
         var sectionOffset = $(this.hash).offset().top-20;
         if(sectionOffset <= scrollbarLocation){
           $(this).parent().addClass('active');
           $(this).parent().siblings().removeClass('active');
         }
       });
     });
  });

//navbar scroll color
$(window).on("scroll",function(){
  if($(window).scrollTop()){
    $('nav').addClass('menu');
  }
  else{
    $('nav').removeClass('menu');
  }
});

// Portfolio filter
   $(window).on('load', function() {
     var $container = $('.portfolioContainer');
     var $filter = $('#filter');
     $container.isotope({
         filter: '*',
         layoutMode: 'masonry',
         animationOptions: {
         duration: 750,
         easing: 'linear'
        }
    });
  $filter.find('a').click(function() {
      var selector = $(this).attr('data-filter');
      $filter.find('a').removeClass('active');
      $(this).addClass('active');
      $container.isotope({
         filter: selector,
         animationOptions: {
         animationDuration: 750,
         easing: 'linear',
         queue: false,
      }
      });
          return false;
       });
   });

//type
var typed = new Typed('.type', {
  strings: ['Web Designer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

})(jQuery);
