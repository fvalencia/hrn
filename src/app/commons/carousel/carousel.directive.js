(function() {
  'use strict';

  angular
    .module('HRN')
    .directive('carousel', carousel);

  /** @ngInject */
  function carousel() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        var hover = false;

        $(element).on('mouseenter mouseleave', '.icon', function(e){
          if(e.type === 'mouseenter'){
            hover = true;
            hiddeCurrent();
          }else{
            hover = false;
          }
        })

        var current = $(element).find('.slide-box')[0],
        prev = null,
        first = current;

        setInterval(function(){
          if(!hover){
            roll();
          }
        }, 1500);

        function roll() {
          $(current).children('.icon').addClass('active');
          if(prev){
            $(prev).children('.icon').removeClass('active');
          }
          prev = current;
          current = $(current).next().length? $(current).next(): first;
        }

        function hiddeCurrent() {
          $(prev).children('.icon').removeClass('active');
        }

      }
    }
  }

})();
