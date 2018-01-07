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
        result.dataService = dataService;
        result.activeQuestion = 0;
        result.getAnswerClass = function(index)
        {
                 if(index === quizMetrics.correctAnswers[result.activeQuestion])
                 {
                     return "bg-success";
                 }
                 else if(index === dataService.quizQuestions[result.activeQuestion].selected)
                 {
                     return "bg-danger";
                 }
        };

        result.setActiveResultQuestion = function(index)
        {
            result.activeQuestion = index;
        };

        result.calculatePercentage = function()
        {
            return quizMetrics.numOfCorrect / dataService.quizQuestions.length * 100;
        };

        result.reset = function()
        {
            quizMetrics.changeState('results', false);
            quizMetrics.numOfCorrect = 0;

            for(var i=0; i< dataService.quizQuestions.length;i++)
            {
                var data = dataService.quizQuestions[i];
                data.selected = null;
                data.correct = null;
            }
        }
    }
})();
