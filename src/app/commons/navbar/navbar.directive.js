(function() {
  'use strict';

  angular
    .module('HRN')
    .directive('navBar', navBar);

  /** @ngInject */
  function navBar() {
    return {
      restrict: 'E',
      templateUrl: 'app/commons/navbar/navbar.html',
    }
  }

})();
