(function()
{
    'use strict';
    angular.module('countryFacts')
           .controller('listController',listController);

    listController.$inject = ['quizMetrics', 'dataService'];
    function listController(quizMetrics, dataService)
    {
        var list = this;
        list.data = dataService.countriesData;
        list.activeCountry = {};
        list.changeActiveCountry = function(index)
                                    {
                                        list.activeCountry = index;
                                    };
        list.search = "";
        list.quizMetrics = quizMetrics;

        list.activateQuiz = function()
        {
            quizMetrics.changeState('quiz',true);
        };
    }
})();