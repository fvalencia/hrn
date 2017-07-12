(function() {
  'use strict';

  angular
    .module('HRN')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock AppRuning');
  }

})();
