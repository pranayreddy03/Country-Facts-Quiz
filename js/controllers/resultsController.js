(function()
{
    'use strict';
    angular.module('countryFacts')
           .controller('resultsController',resultsController);

    resultsController.$inject = ['quizMetrics', 'dataService'];
    function resultsController(quizMetrics,dataService)
    {
        var result = this;
        result.quizMetrics = quizMetrics;
    }
})();
