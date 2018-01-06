(function()
{
    'use strict';

    angular.module('countryFacts')
           .controller('quizController',quizController);

    quizController.$inject = ['quizMetrics'];
    function quizController(quizMetrics)
    {
        var quiz = this;
        quiz.quizMetrics = quizMetrics;
    }

})();