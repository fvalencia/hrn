(function() {
  'use strict';

  angular
    .module('HRN')
    .directive('scrollTrigger', scrollTrigger);

  /** @ngInject */
  function scrollTrigger() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var stop = false;
        $( window ).scroll(function() {
          if(!stop && $(window).scrollTop() > 10){// The user is scroll
            $(element).children('.right').addClass('visible');
            $(element).children('.left').addClass('visible');
            $(element).find('.name').addClass('visible');
            stop = true;
          }
        });
      }
    }
  }

})();
