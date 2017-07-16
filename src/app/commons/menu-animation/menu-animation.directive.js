(function() {
  'use strict';

  angular
    .module('HRN')
    .directive('menuAnimation', menuAnimation);

  /** @ngInject */
  function menuAnimation() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

      var open = false;
      $( document ).ready(function() {
        var elementList = $('.mobile-animation');
        var clean = false;
        $( window ).resize(function() {
          //If the window is resized we clear the current menu
          if($(window).width() > 1280){
            if(!clean){
              $('.nav-bar').removeAttr('style');
              elementList.removeAttr('style');
              $('.main-menu').removeAttr('style');

              $(element).children('.top').removeClass('animate-left-in');
              $(element).children('.top').addClass('animate-left-out');

              $(element).children('.bot').removeClass('animate-right-in');
              $(element).children('.bot').addClass('animate-right-out');

              $(element).children('.mid').removeClass('invisible');
              clean = true;
            }
          }else{
            clean = false;
          }
        });
        $(element).on('click', function(e){
            if(open){

              $(element).children('.top').removeClass('animate-left-in');
              $(element).children('.top').addClass('animate-left-out');

              $(element).children('.bot').removeClass('animate-right-in');
              $(element).children('.bot').addClass('animate-right-out');

              $(element).children('.mid').removeClass('invisible');

              var count = 0;
              elementList.each(function(i){
                $(this).delay( (100 * elementList.length) - (i * 100) ).animate({ opacity: 0, left: 300 }, 200 , function(){
                  count++;
                  if(count == elementList.length){
                    elementList.each(function(i){
                      $(this).css('visibility', 'hidden');
                    });
                    $('.main-menu').css('display', 'none');
                    $('.nav-bar').animate({ height: '70px' }, 300);
                    open = false;
                  }
                });
              });
            }else{

              $(element).children('.top').addClass('animate-left-in');
              $(element).children('.top').removeClass('animate-left-out');

              $(element).children('.bot').addClass('animate-right-in');
              $(element).children('.bot').removeClass('animate-right-out');

              $(element).children('.mid').addClass('invisible');

              $('.nav-bar').animate({ height: '100vh' }, 300 ,function() {
                elementList.each(function(i){
                  $(this).css('visibility', 'visible');
                  $('.main-menu').css('display', 'inherit');
                  $(this).delay(100 * (i + 1)).animate({ opacity: 1, left: 0 }, 200);
                  open = true;
                });
              });
            }
          });
        });

      }
    }
  }

})();
